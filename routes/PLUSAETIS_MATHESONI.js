var express = require('express');
var routerPLUSAETIS_MATHESONI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerPLUSAETIS_MATHESONI.get('/', function(req, res) {

    var renderObj = {
        title: "Plusaetis mathesoni",
        currMap: "pdf/web/viewer.html?file=species-pages/PLUSAETIS_MATHESONI/PLUSAETIS MATHESONI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/PLUSAETIS_MATHESONI/future-maps/future.pdf",
        url: "/PLUSAETIS_MATHESONI",
        urlCSV: "pdf/web/species-pages/PLUSAETIS_MATHESONI/PLUSAETIS MATHESONI pearldata.csv"
    };
    res.render('PLUSAETIS_MATHESONI', renderObj);
});

// Grab data from document
routerPLUSAETIS_MATHESONI.post('/', function(req, res) {

    res.end();
});

module.exports = routerPLUSAETIS_MATHESONI;
