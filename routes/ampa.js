var express = require('express');
var routerAmpa = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAmpa.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma Paulopunctatum",
        clade: "Ixodida",
        source: "Cumming",
    };
    res.render('ampa', renderObj);
});

// Grab data from document
routerAmpa.post('/', function(req, res) {

    res.end();
});

module.exports = routerAmpa;
