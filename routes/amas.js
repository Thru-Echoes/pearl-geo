var express = require('express');
var routerAmas = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAmas.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma astrion",
        clade: "Ixodida",
        source: "Cumming GBIF",
        currMap: "pdf/web/viewer.html?file=species-pages/amas/AMBLYOMMA ASTRION current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/amas/future-maps/future.pdf",
        url: "/amas",
        urlCSV: "pdf/web/species-pages/amas/AMBLYOMMA ASTRION pearldata.csv"
    };
    res.render('amas', renderObj);
});

// Grab data from document
routerAmas.post('/', function(req, res) {

    res.end();
});

module.exports = routerAmas;
