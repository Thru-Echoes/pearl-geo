var express = require('express');
var routerAMBLYOMMA_CAJENNENSE = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAMBLYOMMA_CAJENNENSE.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma cajennense",
        clade: "Ixodida",
        source: "GBIF USNPC",
        currMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_CAJENNENSE/AMBLYOMMA CAJENNENSE current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_CAJENNENSE/future-maps/future.pdf",
        url: "/AMBLYOMMA_CAJENNENSE",
        urlCSV: "pdf/web/species-pages/AMBLYOMMA_CAJENNENSE/AMBLYOMMA CAJENNENSE pearldata.csv"
    };
    res.render('AMBLYOMMA_CAJENNENSE', renderObj);
});

// Grab data from document
routerAMBLYOMMA_CAJENNENSE.post('/', function(req, res) {

    res.end();
});

module.exports = routerAMBLYOMMA_CAJENNENSE;
