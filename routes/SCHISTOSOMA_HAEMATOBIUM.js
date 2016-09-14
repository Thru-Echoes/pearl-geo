var express = require('express');
var routerSCHISTOSOMA_HAEMATOBIUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerSCHISTOSOMA_HAEMATOBIUM.get('/', function(req, res) {

    var renderObj = {
        title: "Schistosoma haematobium",
        currMap: "pdf/web/viewer.html?file=species-pages/SCHISTOSOMA_HAEMATOBIUM/SCHISTOSOMA HAEMATOBIUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/SCHISTOSOMA_HAEMATOBIUM/future-maps/future.pdf",
        url: "/SCHISTOSOMA_HAEMATOBIUM",
        urlCSV: "pdf/web/species-pages/SCHISTOSOMA_HAEMATOBIUM/SCHISTOSOMA HAEMATOBIUM pearldata.csv"
    };
    res.render('SCHISTOSOMA_HAEMATOBIUM', renderObj);
});

// Grab data from document
routerSCHISTOSOMA_HAEMATOBIUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerSCHISTOSOMA_HAEMATOBIUM;
