var express = require('express');
var routerPLEOCHAETIS_PARAMUNDUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerPLEOCHAETIS_PARAMUNDUS.get('/', function(req, res) {

    var renderObj = {
        title: "Pleochaetis paramundus",
        currMap: "pdf/web/viewer.html?file=species-pages/PLEOCHAETIS_PARAMUNDUS/PLEOCHAETIS PARAMUNDUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/PLEOCHAETIS_PARAMUNDUS/future-maps/future.pdf",
        url: "/PLEOCHAETIS_PARAMUNDUS",
        urlCSV: "pdf/web/species-pages/PLEOCHAETIS_PARAMUNDUS/PLEOCHAETIS PARAMUNDUS pearldata.csv"
    };
    res.render('PLEOCHAETIS_PARAMUNDUS', renderObj);
});

// Grab data from document
routerPLEOCHAETIS_PARAMUNDUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerPLEOCHAETIS_PARAMUNDUS;
