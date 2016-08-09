var express = require('express');
var routerAMBLYOMMA_EBERNEUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAMBLYOMMA_EBERNEUM.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma eberneum",
        clade: "Ixodida",
        source: "Cumming",
        currMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_EBERNEUM/AMBLYOMMA EBERNEUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_EBERNEUM/future-maps/future.pdf",
        url: "/AMBLYOMMA_EBERNEUM",
        urlCSV: "pdf/web/species-pages/AMBLYOMMA_EBERNEUM/AMBLYOMMA EBERNEUM pearldata.csv"
    };
    res.render('AMBLYOMMA_EBERNEUM', renderObj);
});

// Grab data from document
routerAMBLYOMMA_EBERNEUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerAMBLYOMMA_EBERNEUM;
