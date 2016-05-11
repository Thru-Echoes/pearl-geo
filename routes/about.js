var express = require('express');
var routerAbout = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAbout.get('/', function(req, res) {
    res.render('about', {
        title: "About Page"
    });
});

module.exports = routerAbout;
