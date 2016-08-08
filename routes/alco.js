var express = require('express');
var routerAlco = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAlco.get('/', function(req, res) {

    var renderObj = {
        title: "Alloglossidium Corti",
        clade: "Trematoda",
        source: "GBIF",
        currMap: "pdf/web/viewer.html?file=species-pages/alco/ALLOGLOSSIDIUM CORTI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/alco/future-maps/future.pdf",
        url: "/alco",
        urlCSV: "pdf/web/species-pages/alco/ALLOGLOSSIDIUM CORTI pearldata.csv"
    };
    res.render('Alco', renderObj);
});

// Grab data from document
routerAlco.post('/', function(req, res) {

    res.end();
});

module.exports = routerAlco;
