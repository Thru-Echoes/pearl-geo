var express = require('express');
var routerPLUSAETIS_PONSI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerPLUSAETIS_PONSI.get('/', function(req, res) {

    var renderObj = {
        title: "Plusaetis ponsi",
        currMap: "pdf/web/viewer.html?file=species-pages/PLUSAETIS_PONSI/PLUSAETIS PONSI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/PLUSAETIS_PONSI/future-maps/future.pdf",
        url: "/PLUSAETIS_PONSI",
        urlCSV: "pdf/web/species-pages/PLUSAETIS_PONSI/PLUSAETIS PONSI pearldata.csv"
    };
    res.render('PLUSAETIS_PONSI', renderObj);
});

// Grab data from document
routerPLUSAETIS_PONSI.post('/', function(req, res) {

    res.end();
});

module.exports = routerPLUSAETIS_PONSI;
