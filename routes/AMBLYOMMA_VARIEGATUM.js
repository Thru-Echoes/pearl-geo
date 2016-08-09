var express = require('express');
var routerAMBLYOMMA_VARIEGATUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAMBLYOMMA_VARIEGATUM.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma variegatum",
        clade: "Ixodida",
        source: "Cumming GBIF",
        currMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_VARIEGATUM/AMBLYOMMA VARIEGATUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_VARIEGATUM/future-maps/future.pdf",
        url: "/AMBLYOMMA_VARIEGATUM",
        urlCSV: "pdf/web/species-pages/AMBLYOMMA_VARIEGATUM/AMBLYOMMA VARIEGATUM pearldata.csv"
    };
    res.render('AMBLYOMMA_VARIEGATUM', renderObj);
});

// Grab data from document
routerAMBLYOMMA_VARIEGATUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerAMBLYOMMA_VARIEGATUM;
