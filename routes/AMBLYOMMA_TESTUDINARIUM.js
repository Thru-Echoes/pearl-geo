var express = require('express');
var routerAMBLYOMMA_TESTUDINARIUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAMBLYOMMA_TESTUDINARIUM.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma testudinarium",
        clade: "Ixodida",
        source: "Cumming GBIF",
        currMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_TESTUDINARIUM/AMBLYOMMA TESTUDINARIUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_TESTUDINARIUM/future-maps/future.pdf",
        url: "/AMBLYOMMA_TESTUDINARIUM",
        urlCSV: "pdf/web/species-pages/AMBLYOMMA_TESTUDINARIUM/AMBLYOMMA TESTUDINARIUM pearldata.csv"
    };
    res.render('AMBLYOMMA_TESTUDINARIUM', renderObj);
});

// Grab data from document
routerAMBLYOMMA_TESTUDINARIUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerAMBLYOMMA_TESTUDINARIUM;
