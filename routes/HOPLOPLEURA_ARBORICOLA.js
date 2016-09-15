var express = require('express');
var routerHOPLOPLEURA_ARBORICOLA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerHOPLOPLEURA_ARBORICOLA.get('/', function(req, res) {

    var renderObj = {
        title: "Hoplopleura arboricola",
        currMap: "pdf/web/viewer.html?file=species-pages/HOPLOPLEURA_ARBORICOLA/HOPLOPLEURA ARBORICOLA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/HOPLOPLEURA_ARBORICOLA/future-maps/future.pdf",
        url: "/HOPLOPLEURA_ARBORICOLA",
        urlCSV: "pdf/web/species-pages/HOPLOPLEURA_ARBORICOLA/HOPLOPLEURA ARBORICOLA pearldata.csv"
    };
    res.render('HOPLOPLEURA_ARBORICOLA', renderObj);
});

// Grab data from document
routerHOPLOPLEURA_ARBORICOLA.post('/', function(req, res) {

    res.end();
});

module.exports = routerHOPLOPLEURA_ARBORICOLA;
