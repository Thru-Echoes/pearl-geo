var express = require('express');
var routerAMBLYOMMA_FLAVOMACULATUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAMBLYOMMA_FLAVOMACULATUM.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma flavomaculatum",
        clade: "Ixodida",
        source: "Cumming",
        currMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_FLAVOMACULATUM/AMBLYOMMA FLAVOMACULATUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_FLAVOMACULATUM/future-maps/future.pdf",
        url: "/AMBLYOMMA_FLAVOMACULATUM",
        urlCSV: "pdf/web/species-pages/AMBLYOMMA_FLAVOMACULATUM/AMBLYOMMA FLAVOMACULATUM pearldata.csv"
    };
    res.render('AMBLYOMMA_FLAVOMACULATUM', renderObj);
});

// Grab data from document
routerAMBLYOMMA_FLAVOMACULATUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerAMBLYOMMA_FLAVOMACULATUM;
