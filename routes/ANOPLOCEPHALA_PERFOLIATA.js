var express = require('express');
var routerANOPLOCEPHALA_PERFOLIATA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerANOPLOCEPHALA_PERFOLIATA.get('/', function(req, res) {

    var renderObj = {
        title: "Anoplocephala perfoliata",
        currMap: "pdf/web/viewer.html?file=species-pages/ANOPLOCEPHALA_PERFOLIATA/ANOPLOCEPHALA PERFOLIATA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/ANOPLOCEPHALA_PERFOLIATA/future-maps/future.pdf",
        url: "/ANOPLOCEPHALA_PERFOLIATA",
        urlCSV: "pdf/web/species-pages/ANOPLOCEPHALA_PERFOLIATA/ANOPLOCEPHALA PERFOLIATA pearldata.csv"
    };
    res.render('ANOPLOCEPHALA_PERFOLIATA', renderObj);
});

// Grab data from document
routerANOPLOCEPHALA_PERFOLIATA.post('/', function(req, res) {

    res.end();
});

module.exports = routerANOPLOCEPHALA_PERFOLIATA;
