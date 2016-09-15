var express = require('express');
var routerPARAMPHISTOMUM_CERVI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerPARAMPHISTOMUM_CERVI.get('/', function(req, res) {

    var renderObj = {
        title: "Paramphistomum cervi",
        currMap: "pdf/web/viewer.html?file=species-pages/PARAMPHISTOMUM_CERVI/PARAMPHISTOMUM CERVI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/PARAMPHISTOMUM_CERVI/future-maps/future.pdf",
        url: "/PARAMPHISTOMUM_CERVI",
        urlCSV: "pdf/web/species-pages/PARAMPHISTOMUM_CERVI/PARAMPHISTOMUM CERVI pearldata.csv"
    };
    res.render('PARAMPHISTOMUM_CERVI', renderObj);
});

// Grab data from document
routerPARAMPHISTOMUM_CERVI.post('/', function(req, res) {

    res.end();
});

module.exports = routerPARAMPHISTOMUM_CERVI;
