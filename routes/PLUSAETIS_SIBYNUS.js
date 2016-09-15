var express = require('express');
var routerPLUSAETIS_SIBYNUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerPLUSAETIS_SIBYNUS.get('/', function(req, res) {

    var renderObj = {
        title: "Plusaetis sibynus",
        currMap: "pdf/web/viewer.html?file=species-pages/PLUSAETIS_SIBYNUS/PLUSAETIS SIBYNUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/PLUSAETIS_SIBYNUS/future-maps/future.pdf",
        url: "/PLUSAETIS_SIBYNUS",
        urlCSV: "pdf/web/species-pages/PLUSAETIS_SIBYNUS/PLUSAETIS SIBYNUS pearldata.csv"
    };
    res.render('PLUSAETIS_SIBYNUS', renderObj);
});

// Grab data from document
routerPLUSAETIS_SIBYNUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerPLUSAETIS_SIBYNUS;
