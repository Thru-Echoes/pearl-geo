var express = require('express');
var routerPLEOCHAETIS_MUNDUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerPLEOCHAETIS_MUNDUS.get('/', function(req, res) {

    var renderObj = {
        title: "Pleochaetis mundus",
        currMap: "pdf/web/viewer.html?file=species-pages/PLEOCHAETIS_MUNDUS/PLEOCHAETIS MUNDUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/PLEOCHAETIS_MUNDUS/future-maps/future.pdf",
        url: "/PLEOCHAETIS_MUNDUS",
        urlCSV: "pdf/web/species-pages/PLEOCHAETIS_MUNDUS/PLEOCHAETIS MUNDUS pearldata.csv"
    };
    res.render('PLEOCHAETIS_MUNDUS', renderObj);
});

// Grab data from document
routerPLEOCHAETIS_MUNDUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerPLEOCHAETIS_MUNDUS;
