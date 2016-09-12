var express = require('express');
var routerIXODES_ARBORICOLA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerIXODES_ARBORICOLA.get('/', function(req, res) {

    var renderObj = {
        title: "Ixodes arboricola",
        currMap: "pdf/web/viewer.html?file=species-pages/IXODES_ARBORICOLA/IXODES ARBORICOLA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/IXODES_ARBORICOLA/future-maps/future.pdf",
        url: "/IXODES_ARBORICOLA",
        urlCSV: "pdf/web/species-pages/IXODES_ARBORICOLA/IXODES ARBORICOLA pearldata.csv"
    };
    res.render('IXODES_ARBORICOLA', renderObj);
});

// Grab data from document
routerIXODES_ARBORICOLA.post('/', function(req, res) {

    res.end();
});

module.exports = routerIXODES_ARBORICOLA;
