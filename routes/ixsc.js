var express = require('express');
var routerIxsc= express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerIxsc.get('/', function(req, res) {
    res.render('ixsc', {
        title: "Species: Ixodes scapularis"
    });
});

// Grab data from document
routerIxsc.post('/', function(req, res) {

    res.end();
});

module.exports = routerIxsc;
