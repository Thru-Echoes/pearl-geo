var express = require('express');
var routerPROTEOCEPHALUS_AMBLOPLITIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerPROTEOCEPHALUS_AMBLOPLITIS.get('/', function(req, res) {

    var renderObj = {
        title: "Proteocephalus ambloplitis",
        currMap: "pdf/web/viewer.html?file=species-pages/PROTEOCEPHALUS_AMBLOPLITIS/PROTEOCEPHALUS AMBLOPLITIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/PROTEOCEPHALUS_AMBLOPLITIS/future-maps/future.pdf",
        url: "/PROTEOCEPHALUS_AMBLOPLITIS",
        urlCSV: "pdf/web/species-pages/PROTEOCEPHALUS_AMBLOPLITIS/PROTEOCEPHALUS AMBLOPLITIS pearldata.csv"
    };
    res.render('PROTEOCEPHALUS_AMBLOPLITIS', renderObj);
});

// Grab data from document
routerPROTEOCEPHALUS_AMBLOPLITIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerPROTEOCEPHALUS_AMBLOPLITIS;
