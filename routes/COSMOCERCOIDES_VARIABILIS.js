var express = require('express');
var routerCOSMOCERCOIDES_VARIABILIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCOSMOCERCOIDES_VARIABILIS.get('/', function(req, res) {

    var renderObj = {
        title: "Cosmocercoides variabilis",
        currMap: "pdf/web/viewer.html?file=species-pages/COSMOCERCOIDES_VARIABILIS/COSMOCERCOIDES VARIABILIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/COSMOCERCOIDES_VARIABILIS/future-maps/future.pdf",
        url: "/COSMOCERCOIDES_VARIABILIS",
        urlCSV: "pdf/web/species-pages/COSMOCERCOIDES_VARIABILIS/COSMOCERCOIDES VARIABILIS pearldata.csv"
    };
    res.render('COSMOCERCOIDES_VARIABILIS', renderObj);
});

// Grab data from document
routerCOSMOCERCOIDES_VARIABILIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerCOSMOCERCOIDES_VARIABILIS;
