var express = require('express');
var routerAMBLYOMMA_POMPOSUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAMBLYOMMA_POMPOSUM.get('/', function(req, res) {

    var renderObj = {
        title: "Amblyomma pomposum",
        clade: "Ixodida",
        source: "Cumming GBIF",
        currMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_POMPOSUM/AMBLYOMMA POMPOSUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_POMPOSUM/future-maps/future.pdf",
        url: "/AMBLYOMMA_POMPOSUM",
        urlCSV: "pdf/web/species-pages/AMBLYOMMA_POMPOSUM/AMBLYOMMA POMPOSUM pearldata.csv"
    };
    res.render('AMBLYOMMA_POMPOSUM', renderObj);
});

// Grab data from document
routerAMBLYOMMA_POMPOSUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerAMBLYOMMA_POMPOSUM;
