var express = require('express');
var routerCAPILLARIA_TENUISSIMA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCAPILLARIA_TENUISSIMA.get('/', function(req, res) {

    var renderObj = {
        title: "Capillaria tenuissima",
        currMap: "pdf/web/viewer.html?file=species-pages/CAPILLARIA_TENUISSIMA/CAPILLARIA TENUISSIMA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/CAPILLARIA_TENUISSIMA/future-maps/future.pdf",
        url: "/CAPILLARIA_TENUISSIMA",
        urlCSV: "pdf/web/species-pages/CAPILLARIA_TENUISSIMA/CAPILLARIA TENUISSIMA pearldata.csv"
    };
    res.render('CAPILLARIA_TENUISSIMA', renderObj);
});

// Grab data from document
routerCAPILLARIA_TENUISSIMA.post('/', function(req, res) {

    res.end();
});

module.exports = routerCAPILLARIA_TENUISSIMA;
