import { STATUS_CODES } from "http";
import { UserApiError } from "./error";
import { StatusCodes } from "http-status-codes";
import { ERROR_CODES } from "#constants/error-codes.constant";
import { logger, mysqlQuery } from "#helpers/index";
import { generateHash, compareHash, generateToken, verifyToken } from "#utils/index";

class products {

    async addProduct(body) {
        const checkProductQuery = "SELECT * FROM product WHERE name = ?";
        const existingProduct = await mysqlQuery(checkProductQuery, [body.name]);

        if (existingProduct.length > 0) {
            throw new UserApiError('Product already exists', StatusCodes.INVALID, ERROR_CODES.DUPLICATE);
        }

        const insertProductQuery = `
            INSERT INTO product (name, \`desc\`, price, isDeleted) 
            VALUES (?, ?, ?, 0)
        `;
        const productDetail = await mysqlQuery(insertProductQuery, [body.name, body.desc, body.price]);
        logger.info(productDetail);
        return;
    }

    async updateProduct(productId, body) {
        const checkProductQuery = "SELECT * FROM product WHERE id = ?";
        const existingProduct = await mysqlQuery(checkProductQuery, [productId]);

        if (existingProduct.length === 0) {
            throw new UserApiError('Product not found', StatusCodes.NOT_FOUND, ERROR_CODES.NOT_FOUND);
        }

        const updateProductQuery = `
            UPDATE product 
            SET name = ?, \`desc\` = ?, price = ?
            WHERE id = ?
        `;
        const updatedProduct = await mysqlQuery(updateProductQuery, [body.name, body.desc, body.price, productId]);
        logger.info(updatedProduct);
        return;
    }

    async fetchAllProducts(page, limit) {
        try {
            const offset = (page - 1) * limit;
            const fetchProductsQuery = "SELECT * FROM product LIMIT ? OFFSET ?";
            const products = await mysqlQuery(fetchProductsQuery, [limit, offset]);

            logger.info(products);
            return products;
        }
        catch (error) {
            console.log(error);
        }
    }

    async fetchOneProduct(productId) {
        try {
            const fetchProductQuery = "SELECT * FROM product WHERE id = ?";
            const singleProduct = await mysqlQuery(fetchProductQuery, [productId]);

            if (!singleProduct || singleProduct.length === 0) {
                throw new UserApiError('Product not found', StatusCodes.NOT_FOUND, ERROR_CODES.NOT_FOUND);
            }

            logger.info(singleProduct);
            return singleProduct;
        }
        catch (error) {
            console.log(error);
        }

    }

    async deleteProduct(productId) {
        const checkProductQuery = "SELECT * FROM product WHERE id = ?";
        const existingProduct = await mysqlQuery(checkProductQuery, [productId]);

        if (existingProduct.length === 0) {
            throw new UserApiError('Product not found', StatusCodes.NOT_FOUND, ERROR_CODES.NOT_FOUND);
        }

        const updateProductQuery = "UPDATE product SET isDeleted = 1 WHERE id = ?";
        const updateResult = await mysqlQuery(updateProductQuery, [productId]);
        logger.info(`Product with ID ${productId} marked as deleted.`);
        return;
    }

    async searchProducts(productName) {
        try {
            const searchQuery = "SELECT * FROM product WHERE name REGEXP ?";
            const products = await mysqlQuery(searchQuery, [productName]);

            if (!products || products.length === 0) {
                throw new UserApiError('No products found', StatusCodes.NOT_FOUND, ERROR_CODES.NOT_FOUND);
            }

            logger.info(products);
            return products;
        }
        catch (error) {
            console.log(error);
        }
    }

    async addToCart(token, body) {
        // Validate the token and get the user ID
        let userId;
        try {
            const decodedToken = verifyToken(token);
            userId = decodedToken.data.id;
            logger.info(userId);
        }
        catch (err) {
            throw new UserApiError(err.message, err.status, err.errorCode);
        }
    
        const productIds = body.productIds;
        console.log(productIds);
    
        // Validate products
        for (const id of productIds) {
            try {
                const exist = "SELECT id FROM product WHERE id = ?";
                const newQuery = await mysqlQuery(exist, id);
                if (newQuery.length === 0) { 
                    throw new UserApiError('One or more products do not exist', 404, 'PRODUCT_NOT_FOUND');
                }
                logger.info("Product Found.");
            }
            catch (error) {
                throw new UserApiError('One or more products do not exist', error.status || 500, error.errorCode || 'UNKNOWN_ERROR');
            }
        }
    
        
        const insertCartUserQuery = "INSERT INTO cart_user (user_id) VALUES (?)";
        const cartUserResult = await mysqlQuery(insertCartUserQuery, [userId]);
        const cartUserId = cartUserResult.insertId; 
    
        
        const insertCartQuery = "INSERT INTO cart (id, product_id) VALUES (?, ?)";
    
        for (const prId of productIds) {
            await mysqlQuery(insertCartQuery, [cartUserId, prId]);
        }
    
        return { cartId: cartUserId, message: 'Products added to cart successfully' };
    }

    async checkoutCart(token, body) {
        let userId;
        try {
            const decodedToken = verifyToken(token);
            userId = decodedToken.data.id;
            logger.info(`User ID: ${userId}`);
        } 
        catch (err) {
            throw new UserApiError(err.message, err.status, err.errorCode);
        }
    
        const cart = await mysqlQuery("SELECT * FROM cart WHERE id = ?", body.cart_id);
    
        if (cart.length === 0) { 
            logger.info("Cart is empty");
            throw new UserApiError('Cart Empty', StatusCodes.INVALID, ERROR_CODES.NOT_FOUND);
        }
    
        const prIds = await mysqlQuery("SELECT GROUP_CONCAT(product_id) AS product_ids FROM cart WHERE id = ?", body.cart_id);
    
        const productIdsString = prIds[0].product_ids;
        const productIdsArray = productIdsString ? productIdsString.split(',') : [];
    
        let bill = 0;
    
        for (const id of productIdsArray) {
            const priceResult = await mysqlQuery("SELECT price FROM product WHERE id = ?", id);
    
            if (priceResult.length > 0) {
                const price = parseFloat(priceResult[0].price); 
                if (!isNaN(price)) {
                    bill += price; 
                }
            }
        }
    
        await mysqlQuery("UPDATE cart SET isDeleted = 1 WHERE id = ?", body.cart_id);
    
        await mysqlQuery("INSERT INTO orders (cart_id, status) VALUES (?, 'Order_Completed')", body.cart_id);
    
        console.log(`Total Bill: ${bill}`);
        return { message: `Products ordered successfully. Bill is: ${bill}` };
    }
    
}

export const product = new products();

