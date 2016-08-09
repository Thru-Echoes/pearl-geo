var express = require('express');
var routerAMBLYOMMA_RHINOCEROTIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAMBLYOMMA_RHINOCEROTIS.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma rhinocerotis",
        clade: "Ixodida",
        source: "Cumming GBIF",
        currMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_RHINOCEROTIS/AMBLYOMMA RHINOCEROTIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_RHINOCEROTIS/future-maps/future.pdf",
        url: "/AMBLYOMMA_RHINOCEROTIS",
        urlCSV: "pdf/web/species-pages/AMBLYOMMA_RHINOCEROTIS/AMBLYOMMA RHINOCEROTIS pearldata.csv"
    };
    res.render('AMBLYOMMA_RHINOCEROTIS', renderObj);
});

// Grab data from document
routerAMBLYOMMA_RHINOCEROTIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerAMBLYOMMA_RHINOCEROTIS;
