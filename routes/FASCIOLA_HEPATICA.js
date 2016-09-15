var express = require('express');
var routerFASCIOLA_HEPATICA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerFASCIOLA_HEPATICA.get('/', function(req, res) {

    var renderObj = {
        title: "Fasciola hepatica",
        currMap: "pdf/web/viewer.html?file=species-pages/FASCIOLA_HEPATICA/FASCIOLA HEPATICA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/FASCIOLA_HEPATICA/future-maps/future.pdf",
        url: "/FASCIOLA_HEPATICA",
        urlCSV: "pdf/web/species-pages/FASCIOLA_HEPATICA/FASCIOLA HEPATICA pearldata.csv"
    };
    res.render('FASCIOLA_HEPATICA', renderObj);
});

// Grab data from document
routerFASCIOLA_HEPATICA.post('/', function(req, res) {

    res.end();
});

module.exports = routerFASCIOLA_HEPATICA;
