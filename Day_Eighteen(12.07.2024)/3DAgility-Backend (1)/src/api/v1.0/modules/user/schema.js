import { joiExtended as Joi } from "#helpers/index";

export const schema = {
	analyzeContract: {
		body: Joi.object({
			name: Joi.string().required(),
			email: Joi.emailextended().noDisposableDomains().required(),
			contact_number: Joi.string().verifyPhoneNumber().validPhoneNumberForRegion(),
			company: Joi.string().required(),
			contract_code: Joi.string().optional()
		})
	},
	signupSchema: {
		body: Joi.object({
			username: Joi.string().min(3).max(30).required(),
			password: Joi.string().min(6).required()
		})
	},
	loginSchema: {
		body: Joi.object({
			username: Joi.string().min(3).max(30).required(),
			password: Joi.string().min(6).required()
		})
	},
	resetPasswordSchema: {
		body: Joi.object({
			// username: Joi.string().min(3).max(30).required(),
			newPassword: Joi.string().min(6).required()
		}),
		query: Joi.object({
			token: Joi.string().required()
		})
	}
};

