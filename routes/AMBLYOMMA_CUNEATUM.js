var express = require('express');
var routerAMBLYOMMA_CUNEATUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAMBLYOMMA_CUNEATUM.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma cuneatum",
        clade: "Ixodida",
        source: "Cumming",
        currMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_CUNEATUM/AMBLYOMMA CUNEATUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_CUNEATUM/future-maps/future.pdf",
        url: "/AMBLYOMMA_CUNEATUM",
        urlCSV: "pdf/web/species-pages/AMBLYOMMA_CUNEATUM/AMBLYOMMA CUNEATUM pearldata.csv"
    };
    res.render('AMBLYOMMA_CUNEATUM', renderObj);
});

// Grab data from document
routerAMBLYOMMA_CUNEATUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerAMBLYOMMA_CUNEATUM;
