const express = require("express");
const { Router } = express;
const router = new Router();
import { methodNotAllowed, validateUser, validateRole, uploadMiddleware, validateSchema} from "#middlewares/index";
import { ROLES } from "#constants/index";
import { controller as api } from "./controller";
import { schema } from "./schema";

const { signup, login, resetPassword } = require('./controller.js');

router.route("/test").all(validateUser).get(api.test).all(methodNotAllowed);
router.route("/contract/analyze").post(uploadMiddleware("contract_file"), validateSchema(schema.analyzeContract), api.analyzeContract).all(methodNotAllowed);

router.route("/signup").post(validateSchema(schema.signupSchema), api.signup).all(methodNotAllowed);
router.route("/login").post(validateSchema(schema.loginSchema), api.login).all(methodNotAllowed);
router.route("/reset-password").post(validateSchema(schema.resetPasswordSchema), api.resetPassword).all(methodNotAllowed);

// Ecommerce
router.route("/addProduct").post(validateSchema(schema.addProduct), api.addProduct).all(methodNotAllowed);
router.route("/updateProduct/:productId").put(validateSchema(schema.updateProduct), api.updateProduct).all(methodNotAllowed);

router.route("/fetchAllProducts").get(validateSchema(schema.fetchAllProductsSchema), api.fetchAllProducts).all(methodNotAllowed);

router.route("/fetchOneProduct/:productId").get(api.fetchOneProduct).all(methodNotAllowed);
router.route("/deleteProduct/:productId").delete(validateSchema(schema.deleteProduct), api.deleteProduct).all(methodNotAllowed);

router.route("/searchProducts/:productName").get(api.searchProducts).all(methodNotAllowed);

router.route("/addToCart")
    .post(validateSchema(schema.addToCart), api.addToCart)
    .all(methodNotAllowed);

router.route("/checkoutCart")
    .post(validateSchema(schema.checkoutCart), api.checkoutCart)
    .all(methodNotAllowed);

module.exports = router;

