var express = require('express');
var routerCAPILLARIA_CONTORTA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCAPILLARIA_CONTORTA.get('/', function(req, res) {

    var renderObj = {
        title: "Capillaria contorta",
        currMap: "pdf/web/viewer.html?file=species-pages/CAPILLARIA_CONTORTA/CAPILLARIA CONTORTA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/CAPILLARIA_CONTORTA/future-maps/future.pdf",
        url: "/CAPILLARIA_CONTORTA",
        urlCSV: "pdf/web/species-pages/CAPILLARIA_CONTORTA/CAPILLARIA CONTORTA pearldata.csv"
    };
    res.render('CAPILLARIA_CONTORTA', renderObj);
});

// Grab data from document
routerCAPILLARIA_CONTORTA.post('/', function(req, res) {

    res.end();
});

module.exports = routerCAPILLARIA_CONTORTA;
