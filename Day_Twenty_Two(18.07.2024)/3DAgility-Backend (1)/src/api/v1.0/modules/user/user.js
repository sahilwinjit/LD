import { STATUS_CODES } from "http";
import { UserApiError } from "./error";
import { StatusCodes } from "http-status-codes";
import { ERROR_CODES } from "#constants/error-codes.constant";
import { logger, mysqlQuery } from "#helpers/index";
import { generateHash, compareHash, generateToken, verifyToken } from "#utils/index";

const childProcess = require("child_process");

class UserService {
	async test() {
		const data = await Promise.resolve("Working !");
		return data;
	}

	/**
	 *
	 * @param {string} command
	 * @param {object} args
	 * @param {object} options
	 * @param {string} address
	 * @returns {Promise<string>}
	 * This function runs the myth script and returns the result
	 */
	_runScript(command, args, options) {
		// eslint-disable-next-line no-unused-vars
		return new Promise((resolve, reject) => {
			const child = childProcess.spawn(command, args, options);
			let result = "";
			child.stdout.on("data", data => {
				result += data.toString();
			});
			child.on("close", () => resolve(result));
		});
	}

	/**
	 * This function analyzes the contract and returns the result
	 */
	async analyzeContract(reqInfo, fileInfo) {
		try {
			let userId;
			const user = await this._checkIfUserExists(reqInfo.email);
			if (!user) {
				userId = await this._insertUser({
					name: reqInfo.name,
					email: reqInfo.email,
					contact_number: reqInfo.contact_number,
					company: reqInfo.company
				});
			} else {
				userId = user.user_id;
			}
			if(password != newPassword) {
				throw new UserApiError("Incorrect Password", StatusCodes.BAD_REQUEST, ERROR_CODES.INVALID)
			}

			return {
				data: null,
				message: "Analysis report will be sent to registered email address!"
			};
		} catch (err) {
			throw err;
		}
	}


	async signup(body) {
		
        const existingUserQuery = "SELECT * FROM users WHERE username = ?";
        const existingUserResult = await mysqlQuery(existingUserQuery, [body.username]);
        
        if (existingUserResult.length > 0) {
			throw new UserApiError('User already exists', StatusCodes.INVALID, ERROR_CODES.DUPLICATE);
            
        }

        const hashedPassword = await generateHash(body.password);
        const insertUserQuery = "INSERT INTO users (username, password) VALUES (?, ?)";
        const userDetail = await mysqlQuery(insertUserQuery, [body.username, hashedPassword]);
		logger.info(userDetail);
        return;
	}

	
	async login(body) {
		try {
			const rows = await mysqlQuery('SELECT * FROM users WHERE username = ?', [body.username]);
	
			if (rows.length === 0) {
				throw new UserApiError('Invalid Credentials', StatusCodes.INVALID, ERROR_CODES.INVALID);
			}
	
			const isMatch = await compareHash(body.password, rows[0].password);
	
			if (!isMatch) {
				throw new UserApiError('Invalid Credentials', StatusCodes.INVALID, ERROR_CODES.INVALID);
			}
			
			const userDetail = { 
				id: rows[0].id,
				username: rows[0].username
			}
			const token = generateToken(userDetail);
	
			logger.info('Generated token:', token);
	
			return {
				message: 'Login successful',
				data: {
					...userDetail,
					token
				}
			};
		} 
		catch (error) {
			throw error;
		}
	}

	async resetPassword(body, query) {
    
        try {
			const userDetail = await verifyToken(query.token);
			logger.info(userDetail);
            const rows = await mysqlQuery('SELECT * FROM users WHERE username = ?', [userDetail.data.username]);
    
            if (rows.length === 0) {
                throw new UserApiError('User not found.', StatusCodes.INVALID, ERROR_CODES.INVALID);
            }
    
            const hashedPassword = await generateHash(body.newPassword);
            const newUserDetails = await mysqlQuery('UPDATE users SET password = ? WHERE username = ?', [hashedPassword, userDetail.data.username]);
			
			logger.info('Password Reset Succesfully', newUserDetails);
			return;
        } 
		catch (error) {
            throw error;
        }

	}
	
}

export const userService = new UserService();

