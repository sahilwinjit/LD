import { catchAsync } from "#utils/index";
import { userService } from "./user";
import { logger} from "#helpers/index";
import { product } from "./products";



export const controller = {
	test: catchAsync(async (req, res) => {
		const response = await userService.test();
		res.jsend.success(response);
	}),

	analyzeContract: catchAsync(async (req, res) => {
		const response = await userService.analyzeContract(req.body, req.file);
		res.jsend.success(response.data, response.message);
	}),

    signup: catchAsync(async (req, res) => {
       const response = await userService.signup(req.body);
       res.jsend.success(response);
    }),

    login: catchAsync(async (req, res) => {
        const response = await userService.login(req.body);
        res.jsend.success(response);
    }),

    resetPassword: catchAsync(async (req, res) => {
        logger.info(req);
        const response = await userService.resetPassword(req.body, req.query);

       res.jsend.success(response);
    }),

    addProduct: catchAsync(async (req, res) => {
        const response = await product.addProduct(req.body);
        res.jsend.success(response);
    }),

    updateProduct: catchAsync(async (req, res) => {
        const response = await product.updateProduct(req.params.productId, req.body);
        res.jsend.success(response);
    }),

    fetchAllProducts: catchAsync(async (req, res) => {
        const { page, limit } = req.query;
        const response = await product.fetchAllProducts(page, limit);
        res.jsend.success(response);      
    }),

    fetchOneProduct: catchAsync(async (req, res) => {
        const response = await product.fetchOneProduct(req.params.productId);
        res.jsend.success(response);
    }),

    deleteProduct: catchAsync(async (req, res) => {
        const response = await product.deleteProduct(req.params.productId);
        res.jsend.success(response);
    }),

    searchProducts: catchAsync(async (req, res) => {
        const response = await product.searchProducts(req.params.productName);
        res.jsend.success(response);
    }),
    

    addToCart: catchAsync(async (req, res) => {
        const { token } = req.query;
        // const { productIds } = req.body;
    
        const response = await product.addToCart(token, req.body);
        res.jsend.success(response);
    }),

    checkoutCart: catchAsync(async (req, res) => {
        const { token } = req.query;
        const response = await product.checkoutCart(token, req.body);
        res.jsend.success(response);
    })
    
}

