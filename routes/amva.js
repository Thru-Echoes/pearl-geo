var express = require('express');
var routerAmva = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAmva.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma Variegatum",
        clade: "Ixodida",
        source: "Cumming GBIF",
    };
    res.render('Amva', renderObj);
});

// Grab data from document
routerAmva.post('/', function(req, res) {

    res.end();
});

module.exports = routerAmva;
