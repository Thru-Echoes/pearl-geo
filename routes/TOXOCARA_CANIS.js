var express = require('express');
var routerTOXOCARA_CANIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerTOXOCARA_CANIS.get('/', function(req, res) {

    var renderObj = {
        title: "Toxocara canis",
        currMap: "pdf/web/viewer.html?file=species-pages/TOXOCARA_CANIS/TOXOCARA CANIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/TOXOCARA_CANIS/future-maps/future.pdf",
        url: "/TOXOCARA_CANIS",
        urlCSV: "pdf/web/species-pages/TOXOCARA_CANIS/TOXOCARA CANIS pearldata.csv"
    };
    res.render('TOXOCARA_CANIS', renderObj);
});

// Grab data from document
routerTOXOCARA_CANIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerTOXOCARA_CANIS;
