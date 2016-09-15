var express = require('express');
var routerOSTERTAGIA_MOSSI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerOSTERTAGIA_MOSSI.get('/', function(req, res) {

    var renderObj = {
        title: "Ostertagia mossi",
        currMap: "pdf/web/viewer.html?file=species-pages/OSTERTAGIA_MOSSI/OSTERTAGIA MOSSI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/OSTERTAGIA_MOSSI/future-maps/future.pdf",
        url: "/OSTERTAGIA_MOSSI",
        urlCSV: "pdf/web/species-pages/OSTERTAGIA_MOSSI/OSTERTAGIA MOSSI pearldata.csv"
    };
    res.render('OSTERTAGIA_MOSSI', renderObj);
});

// Grab data from document
routerOSTERTAGIA_MOSSI.post('/', function(req, res) {

    res.end();
});

module.exports = routerOSTERTAGIA_MOSSI;
