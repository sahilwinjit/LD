const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const users = require('../data/data');

// Signup

// exports.signup = async (req, res) => {
//     try {
//         const { username, password } = req.body;
//         const existingUser = users.find(user => user.username === username);

//         if (existingUser) {
//             return res.status(400).json({ 
//                 message: 'User already exists' 
//             });
//         }

//         const hashedPassword = await bcrypt.hash(password, 10);
//         const newUser = { 
//             id: users.length + 1, 
//             username, password: hashedPassword 
//         };
//         users.push(newUser);

//         res.status(201).json({ message: 'User created successfully' });
//     } 
//     catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server error' });
//     }
// };

exports.signup = (req, res) => {
    const { username, password } = req.body;
    const existingUser = users.find(user => user.username === username);

    if (existingUser) {
        return res.status(400).json({ 
            message: 'User already exists' 
        });
    }

    bcrypt.hash(password, 10)
        .then(hashedPassword => {
            const newUser = { 
                id: users.length + 1, 
                username, 
                password: hashedPassword 
            };
            users.push(newUser);

            res.status(201).json({ message: 'User created successfully' });
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        });
};

// Login
exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = users.find(user => user.username === username);

        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ 
                message: 'Invalid credentials' 
            });
        }

        const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });

        res.json({ 
            message: 'Login successful',
            token
        });
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Reset Password
exports.resetPassword = async (req, res) => {
    try {
        const { username, newPassword } = req.body;
        const user = users.find(user => user.username === username);

        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;

        res.json({ 
            message: 'Password reset successfully' 
        });
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

