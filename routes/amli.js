var express = require('express');
var routerAmli = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAmli.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma Limbatum",
        clade: "Ixodida",
        source: "GBIF",
    };
    res.render('amli', renderObj);
});

// Grab data from document
routerAmli.post('/', function(req, res) {

    res.end();
});

module.exports = routerAmli;
