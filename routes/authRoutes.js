const express = require('express');
const authRoutes = express.Router();
const userController = require('../controllers/authController');

authRoutes.get('/register', (req, res) => {
    res.render('../views/register.pug');
});

authRoutes.post('/register', userController.register);

authRoutes.get('/login', (req, res) => {
    res.render('../views/login.pug');
});

authRoutes.post('/login', userController.login);

module.exports = authRoutes;
