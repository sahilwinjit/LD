const jwt = require('jsonwebtoken');
const users = require('../data/data');

const authenticate = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    console.log(token);

    if (!token) {
        return res.status(401).json({
            message: 'No Token Provided.'
        });
    }

    try {
        const decoded = jwt.verify(token, 'your_jwt_secret');
        const user = users.find(user => user.id === decoded.id);
        if (!user) {
            return res.status(404).json({
                message: 'User not found.'
            });
        }

        req.user = user;
        next();
    } catch (error) {
        res.status(400).json({
            message: 'Invalid Token'
        });
    }
};

module.exports = authenticate;

