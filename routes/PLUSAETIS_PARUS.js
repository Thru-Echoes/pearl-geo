var express = require('express');
var routerPLUSAETIS_PARUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerPLUSAETIS_PARUS.get('/', function(req, res) {

    var renderObj = {
        title: "Plusaetis parus",
        currMap: "pdf/web/viewer.html?file=species-pages/PLUSAETIS_PARUS/PLUSAETIS PARUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/PLUSAETIS_PARUS/future-maps/future.pdf",
        url: "/PLUSAETIS_PARUS",
        urlCSV: "pdf/web/species-pages/PLUSAETIS_PARUS/PLUSAETIS PARUS pearldata.csv"
    };
    res.render('PLUSAETIS_PARUS', renderObj);
});

// Grab data from document
routerPLUSAETIS_PARUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerPLUSAETIS_PARUS;
