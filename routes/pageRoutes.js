const express = require('express');
const pageRoutes = express.Router();

pageRoutes.get('/homepage', (req, res) => {
    res.render('../views/homepage.pug');
});
pageRoutes.get('/about', (req, res) => {
    res.render('../views/about.pug');
});
pageRoutes.get('/contact', (req, res) => {
    res.render('../views/contact.pug');
});
pageRoutes.get('/faq', (req, res) => {
    res.render('../views/faq.pug');
});

module.exports = pageRoutes;
