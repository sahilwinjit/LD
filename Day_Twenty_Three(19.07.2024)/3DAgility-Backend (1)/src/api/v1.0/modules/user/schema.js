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
	},

	addProduct: {
		body: Joi.object({
			name: Joi.string().max(255).required(),
			desc: Joi.string().allow(null, ''),
			price: Joi.number().precision(2).positive().required(),
			isDeleted: Joi.number().integer().min(0).max(1).default(0)
		})
	},

	updateProduct: {
		params: Joi.object({
			productId: Joi.number().integer().required()
		}),
		body: Joi.object({
			name: Joi.string().max(255),
			desc: Joi.string().allow(null, ''),
			price: Joi.number().precision(2).positive(),
			isDeleted: Joi.number().integer().min(0).max(1)
		}).min(1)
	},

	fetchAllProductsSchema: {
        query: Joi.object({
            page: Joi.number().integer().min(1).required(),
            limit: Joi.number().integer().min(1).required()
        })
    },

	deleteProduct: {
		params: Joi.object({
			productId: Joi.number().integer().required()
		})
	},

	searchProductsSchema: {
		params: Joi.object({
			productName: Joi.string().required()
		})
	},

	addToCart: {
		query: Joi.object({
			token: Joi.string().required(),
		}),
		body: Joi.object({
			productIds: Joi.array().items(Joi.number().integer().required()).required()
		})
	},

	checkoutCart: {
		query: Joi.object({
			token: Joi.string().required(),
		}),
		body: Joi.object({
			cart_id: Joi.number().integer().required(),
		})
	}
		
};

