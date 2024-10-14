const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const router = express.Router();
const SECRET_KEY = process.env.JWT_SECRET || 'your_default_secret_key';  // Use a secret from env

// Dummy admin user (replace this with a database user in production)
const adminUser = {
    username: 'admin',
    password: bcrypt.hashSync('admin_password', 10),  // Use hashed password
};

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).send('Token is required');
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).send('Unauthorized');
        }
        req.user = decoded;
        next();
    });
};

// Login route
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Check username and password
    if (username !== adminUser.username) {
        return res.status(400).send('User not found');
    }

    const validPassword = bcrypt.compareSync(password, adminUser.password);
    if (!validPassword) {
        return res.status(400).send('Invalid password');
    }

    // Generate JWT token
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
    return res.json({ token });
});

module.exports = {
    router,
    verifyToken,
};
