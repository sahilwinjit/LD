const Joi = require('joi');

const signupSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(6).required()
});

const loginSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(6).required()
});

const resetPasswordSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    newPassword: Joi.string().min(6).required()
});

module.exports = {
    signupSchema,
    loginSchema,
    resetPasswordSchema
};

