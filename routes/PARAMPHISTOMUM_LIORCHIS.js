var express = require('express');
var routerPARAMPHISTOMUM_LIORCHIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerPARAMPHISTOMUM_LIORCHIS.get('/', function(req, res) {

    var renderObj = {
        title: "Paramphistomum liorchis",
        currMap: "pdf/web/viewer.html?file=species-pages/PARAMPHISTOMUM_LIORCHIS/PARAMPHISTOMUM LIORCHIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/PARAMPHISTOMUM_LIORCHIS/future-maps/future.pdf",
        url: "/PARAMPHISTOMUM_LIORCHIS",
        urlCSV: "pdf/web/species-pages/PARAMPHISTOMUM_LIORCHIS/PARAMPHISTOMUM LIORCHIS pearldata.csv"
    };
    res.render('PARAMPHISTOMUM_LIORCHIS', renderObj);
});

// Grab data from document
routerPARAMPHISTOMUM_LIORCHIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerPARAMPHISTOMUM_LIORCHIS;
