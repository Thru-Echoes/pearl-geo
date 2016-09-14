var express = require('express');
var routerSCHISTOSOMA_MANSONI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerSCHISTOSOMA_MANSONI.get('/', function(req, res) {

    var renderObj = {
        title: "Schistosoma mansoni",
        currMap: "pdf/web/viewer.html?file=species-pages/SCHISTOSOMA_MANSONI/SCHISTOSOMA MANSONI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/SCHISTOSOMA_MANSONI/future-maps/future.pdf",
        url: "/SCHISTOSOMA_MANSONI",
        urlCSV: "pdf/web/species-pages/SCHISTOSOMA_MANSONI/SCHISTOSOMA MANSONI pearldata.csv"
    };
    res.render('SCHISTOSOMA_MANSONI', renderObj);
});

// Grab data from document
routerSCHISTOSOMA_MANSONI.post('/', function(req, res) {

    res.end();
});

module.exports = routerSCHISTOSOMA_MANSONI;
