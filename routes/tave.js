var express = require('express');
var routerTave = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerTave.get('/', function(req, res) {
    res.render('tave', {
        title: "Species: Tabascotrema verai"
    });
});

// Grab data from document
routerTave.post('/', function(req, res) {

    res.end();
});

module.exports = routerTave;
