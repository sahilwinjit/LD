const express = require('express');
const { signup, login, resetPassword } = require('../controllers/auth');
const validate = require('../middlewares/validate');
const { signupSchema, loginSchema, resetPasswordSchema } = require('../validators/authValidators');
const authenticate = require('../middlewares/authenticate');

const router = express.Router();

router.post('/signup', validate(signupSchema), signup);
router.post('/login', validate(loginSchema), login);
router.post('/reset-password', validate(resetPasswordSchema), resetPassword);

router.post('/validate', authenticate, (req, res) => {
    const { id, username } = req.user;
    res.json({
        id,
        username
    });
});

module.exports = router;

