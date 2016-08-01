var express = require('express');
var routerAmhel = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAmhel.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma Helvolum",
        clade: "Ixodida",
        source: "GBIF",
    };
    res.render('Amhel', renderObj);
});

// Grab data from document
routerAmhel.post('/', function(req, res) {

    res.end();
});

module.exports = routerAmhel;
