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
     
}


export const product = new products();

