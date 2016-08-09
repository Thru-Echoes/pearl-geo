var express = require('express');
var routerAMBLYOMMA_FALSOMARMOREUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAMBLYOMMA_FALSOMARMOREUM.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma falsomarmoreum",
        clade: "Ixodida",
        source: "Cumming",
        currMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_FALSOMARMOREUM/AMBLYOMMA FALSOMARMOREUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_FALSOMARMOREUM/future-maps/future.pdf",
        url: "/AMBLYOMMA_FALSOMARMOREUM",
        urlCSV: "pdf/web/species-pages/AMBLYOMMA_FALSOMARMOREUM/AMBLYOMMA FALSOMARMOREUM pearldata.csv"
    };
    res.render('AMBLYOMMA_FALSOMARMOREUM', renderObj);
});

// Grab data from document
routerAMBLYOMMA_FALSOMARMOREUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerAMBLYOMMA_FALSOMARMOREUM;
