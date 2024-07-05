const express = require('express');
const { signup, login, resetPassword } = require('../controllers/auth');
const validate = require('../middlewares/validate');
const { signupSchema, loginSchema, resetPasswordSchema } = require('../validators/authValidators');

const router = express.Router();

router.post('/signup', validate(signupSchema), signup);
router.post('/login', validate(loginSchema), login);
router.post('/reset-password', validate(resetPasswordSchema), resetPassword);

module.exports = router;

