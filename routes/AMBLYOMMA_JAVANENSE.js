var express = require('express');
var routerAMBLYOMMA_JAVANENSE = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAMBLYOMMA_JAVANENSE.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma javanense",
        clade: "Ixodida",
        source: "GBIF",
        currMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_JAVANENSE/AMBLYOMMA JAVANENSE current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_JAVANENSE/future-maps/future.pdf",
        url: "/AMBLYOMMA_JAVANENSE",
        urlCSV: "pdf/web/species-pages/AMBLYOMMA_JAVANENSE/AMBLYOMMA JAVANENSE pearldata.csv"
    };
    res.render('AMBLYOMMA_JAVANENSE', renderObj);
});

// Grab data from document
routerAMBLYOMMA_JAVANENSE.post('/', function(req, res) {

    res.end();
});

module.exports = routerAMBLYOMMA_JAVANENSE;
