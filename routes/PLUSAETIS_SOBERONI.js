var express = require('express');
var routerPLUSAETIS_SOBERONI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerPLUSAETIS_SOBERONI.get('/', function(req, res) {

    var renderObj = {
        title: "Plusaetis soberoni",
        currMap: "pdf/web/viewer.html?file=species-pages/PLUSAETIS_SOBERONI/PLUSAETIS SOBERONI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/PLUSAETIS_SOBERONI/future-maps/future.pdf",
        url: "/PLUSAETIS_SOBERONI",
        urlCSV: "pdf/web/species-pages/PLUSAETIS_SOBERONI/PLUSAETIS SOBERONI pearldata.csv"
    };
    res.render('PLUSAETIS_SOBERONI', renderObj);
});

// Grab data from document
routerPLUSAETIS_SOBERONI.post('/', function(req, res) {

    res.end();
});

module.exports = routerPLUSAETIS_SOBERONI;
