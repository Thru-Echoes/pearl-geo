var express = require('express');
var routerCOSMOCERCOIDES_DUKAE = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCOSMOCERCOIDES_DUKAE.get('/', function(req, res) {

    var renderObj = {
        title: "Cosmocercoides dukae",
        currMap: "pdf/web/viewer.html?file=species-pages/COSMOCERCOIDES_DUKAE/COSMOCERCOIDES DUKAE current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/COSMOCERCOIDES_DUKAE/future-maps/future.pdf",
        url: "/COSMOCERCOIDES_DUKAE",
        urlCSV: "pdf/web/species-pages/COSMOCERCOIDES_DUKAE/COSMOCERCOIDES DUKAE pearldata.csv"
    };
    res.render('COSMOCERCOIDES_DUKAE', renderObj);
});

// Grab data from document
routerCOSMOCERCOIDES_DUKAE.post('/', function(req, res) {

    res.end();
});

module.exports = routerCOSMOCERCOIDES_DUKAE;
