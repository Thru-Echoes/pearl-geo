var express = require('express');
var routerAmnu = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAmnu.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma Nuttalli",
        clade: "Ixodida",
        source: "Cumming GBIF",
    };
    res.render('Amnu', renderObj);
});

// Grab data from document
routerAmnu.post('/', function(req, res) {

    res.end();
});

module.exports = routerAmnu;
