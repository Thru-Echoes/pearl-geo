var express = require('express');
var routerAMBLYOMMA_NUTTALLI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAMBLYOMMA_NUTTALLI.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma nuttalli",
        clade: "Ixodida",
        source: "Cumming GBIF",
        currMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_NUTTALLI/AMBLYOMMA NUTTALLI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_NUTTALLI/future-maps/future.pdf",
        url: "/AMBLYOMMA_NUTTALLI",
        urlCSV: "pdf/web/species-pages/AMBLYOMMA_NUTTALLI/AMBLYOMMA NUTTALLI pearldata.csv"
    };
    res.render('AMBLYOMMA_NUTTALLI', renderObj);
});

// Grab data from document
routerAMBLYOMMA_NUTTALLI.post('/', function(req, res) {

    res.end();
});

module.exports = routerAMBLYOMMA_NUTTALLI;
