const express = require('express');
const pageRoutes = express.Router();
const renderView = require('../helpers/renderView');

// Home route
pageRoutes.get('/', (req, res) => {
    renderView('homepage', req, res);
});

// Explicit homepage route with session check
pageRoutes.get('/homepage', (req, res) => {
    renderView('homepage', req, res);
});

// Other routes
pageRoutes.get('/about', (req, res) => {
    renderView('about', req, res);
});

pageRoutes.get('/contact', (req, res) => {
    renderView('contact', req, res);
});

pageRoutes.get('/faq', (req, res) => {
    renderView('faq', req, res);
});

module.exports = pageRoutes;
