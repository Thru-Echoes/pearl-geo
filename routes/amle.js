var express = require('express');
var routerAmle = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAmle.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma Lepidum",
        clade: "Ixodida",
        source: "Cumming GBIF",
    };
    res.render('Amle', renderObj);
});

// Grab data from document
routerAmle.post('/', function(req, res) {

    res.end();
});

module.exports = routerAmle;
