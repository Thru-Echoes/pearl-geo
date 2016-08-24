var express = require('express');
var routerCONTRACAECUM_SPICULIGERUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCONTRACAECUM_SPICULIGERUM.get('/', function(req, res) {

    var renderObj = {
        title: "Contracaecum spiculigerum",
        currMap: "pdf/web/viewer.html?file=species-pages/CONTRACAECUM_SPICULIGERUM/CONTRACAECUM SPICULIGERUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/CONTRACAECUM_SPICULIGERUM/future-maps/future.pdf",
        url: "/CONTRACAECUM_SPICULIGERUM",
        urlCSV: "pdf/web/species-pages/CONTRACAECUM_SPICULIGERUM/CONTRACAECUM SPICULIGERUM pearldata.csv"
    };
    res.render('CONTRACAECUM_SPICULIGERUM', renderObj);
});

// Grab data from document
routerCONTRACAECUM_SPICULIGERUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerCONTRACAECUM_SPICULIGERUM;
