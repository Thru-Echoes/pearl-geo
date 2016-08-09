var express = require('express');
var routerAMBLYOMMA_LATUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAMBLYOMMA_LATUM.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma latum",
        clade: "Ixodida",
        source: "Cumming",
        currMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_LATUM/AMBLYOMMA LATUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_LATUM/future-maps/future.pdf",
        url: "/AMBLYOMMA_LATUM",
        urlCSV: "pdf/web/species-pages/AMBLYOMMA_LATUM/AMBLYOMMA LATUM pearldata.csv"
    };
    res.render('AMBLYOMMA_LATUM', renderObj);
});

// Grab data from document
routerAMBLYOMMA_LATUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerAMBLYOMMA_LATUM;
