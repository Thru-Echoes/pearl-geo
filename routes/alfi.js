var express = require('express');
var routerAlfi = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAlfi.get('/', function(req, res) {
    var renderObj = {
        title: "Allocorrigia filiformis",
        clade: "Trematoda",
        source: "USNPC",
        currMap: "pdf/web/viewer.html?file=species-pages/alfi/ALLOCORRIGIA FILIFORMIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/alfi/future-maps/ALLOCORRIGIA FILIFORMIS future.pdf",
        crStatus: "CR",
        dataQuality: "Fair",
        modelQuality: "Good",
        url: "/alfi",
        urlCSV: "pdf/web/species-pages/alfi/ALLOCORRIGIA FILIFORMIS pearldata.csv"
    };
    res.render('Alfi', renderObj);
});

// Grab data from document
routerAlfi.post('/', function(req, res) {

    res.end();
});

module.exports = routerAlfi;
