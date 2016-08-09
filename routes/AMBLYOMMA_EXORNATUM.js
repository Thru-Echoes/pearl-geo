var express = require('express');
var routerAMBLYOMMA_EXORNATUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAMBLYOMMA_EXORNATUM.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma exornatum",
        clade: "Ixodida",
        source: "Cumming",
        currMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_EXORNATUM/AMBLYOMMA EXORNATUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_EXORNATUM/future-maps/future.pdf",
        url: "/AMBLYOMMA_EXORNATUM",
        urlCSV: "pdf/web/species-pages/AMBLYOMMA_EXORNATUM/AMBLYOMMA EXORNATUM pearldata.csv"
    };
    res.render('AMBLYOMMA_EXORNATUM', renderObj);
});

// Grab data from document
routerAMBLYOMMA_EXORNATUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerAMBLYOMMA_EXORNATUM;
