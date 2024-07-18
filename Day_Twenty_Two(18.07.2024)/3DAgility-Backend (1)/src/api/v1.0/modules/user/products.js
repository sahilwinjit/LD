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

        const currentTimestamp = new Date().toISOString().slice(0, 19).replace('T', ' ');

        const insertProductQuery = `
            INSERT INTO product (name, \`desc\`, price, createdDate, updatedDate, isDeleted) 
            VALUES (?, ?, ?, ?, ?, 0)
        `;
        const productDetail = await mysqlQuery(insertProductQuery, [body.name, body.desc, body.price, currentTimestamp, currentTimestamp]);
        logger.info(productDetail);
        return;
    }

    async updateProduct(productId, body) {
        const checkProductQuery = "SELECT * FROM product WHERE id = ?";
        const existingProduct = await mysqlQuery(checkProductQuery, [productId]);

        if (existingProduct.length === 0) {
            throw new UserApiError('Product not found', StatusCodes.NOT_FOUND, ERROR_CODES.NOT_FOUND);
        }

        const currentTimestamp = new Date().toISOString().slice(0, 19).replace('T', ' ');

        const updateProductQuery = `
            UPDATE product 
            SET name = ?, \`desc\` = ?, price = ?, updatedDate = ?
            WHERE id = ?
        `;
        const updatedProduct = await mysqlQuery(updateProductQuery, [body.name, body.desc, body.price, currentTimestamp, productId]);
        logger.info(updatedProduct);
        return;

    }

    async fetchAllProducts() {
        try {
            const fetchProductsQuery = "SELECT * FROM product";
            const products = await mysqlQuery(fetchProductsQuery);

            logger.info(products);
            return products;
        } 
        catch (error) {
            console.log(error);
        }
    }

    async fetchOneProduct(productName) {
        try {
            const fetchProductQuery = "SELECT * FROM product WHERE name = ?";
            const singleProduct = await mysqlQuery(fetchProductQuery, [productName]);

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

    async cart(body) {
         // Step 1: Retrieve the IDs for the product names from the cart table
        const productNames = body.productNames;
        const productIds = [];
        
        for (const name of productNames) {
            const getProductQuery = "SELECT id FROM product WHERE name = ?";
            const result = await mysqlQuery(getProductQuery, [name]);

            if (result.length > 0) {
            productIds.push(result[0].id);
            } else {
            throw new UserApiError(`Product with name ${name} not found`, StatusCodes.NOT_FOUND, ERROR_CODES.NOT_FOUND);
            }
        }

        // Step 2: Determine the cart_id for the new entries
        // const getLastIdQuery = "SELECT id FROM cart ORDER BY id DESC LIMIT 1";
        const getLastIdQuery = "SELECT cart_id FROM cart ORDER BY cart_id DESC LIMIT 1";

        const lastRow = await mysqlQuery(getLastIdQuery);

        let count = 1;
        if (lastRow.length > 0) {
            count = lastRow[0].cart_id + 1;
        }

        // Step 3: Insert the new rows into the cart table
        const insertCartQuery = "INSERT INTO cart (cart_id, product_id, status) VALUES (?, ?, 'Pending')";
        
        for (const productId of productIds) {
            await mysqlQuery(insertCartQuery, [count, productId]);
        }

        // Step 4: Send response
        return {
            message: 'Products added to the cart successfully.',
        };
    }
     
}

export const product = new products();

