var express = require('express');
var routerALLOCORRIGIA_FILIFORMIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerALLOCORRIGIA_FILIFORMIS.get('/', function(req, res) {
    var renderObj = {
        title: "Allocorrigia filiformis",
        clade: "Trematoda",
        source: "USNPC",
        currMap: "pdf/web/viewer.html?file=species-pages/ALLOCORRIGIA_FILIFORMIS/ALLOCORRIGIA FILIFORMIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/ALLOCORRIGIA_FILIFORMIS/future-maps/future.pdf",
        url: "/ALLOCORRIGIA_FILIFORMIS",
        urlCSV: "pdf/web/species-pages/ALLOCORRIGIA_FILIFORMIS/ALLOCORRIGIA FILIFORMIS pearldata.csv"
    };
    res.render('ALLOCORRIGIA_FILIFORMIS', renderObj);
});

// Grab data from document
routerALLOCORRIGIA_FILIFORMIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerALLOCORRIGIA_FILIFORMIS;
