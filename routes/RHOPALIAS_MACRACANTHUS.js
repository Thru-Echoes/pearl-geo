var express = require('express');
var routerRHOPALIAS_MACRACANTHUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHOPALIAS_MACRACANTHUS.get('/', function(req, res) {

    var renderObj = {
        title: "Rhopalias macracanthus",
        currMap: "pdf/web/viewer.html?file=species-pages/RHOPALIAS_MACRACANTHUS/RHOPALIAS MACRACANTHUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHOPALIAS_MACRACANTHUS/future-maps/future.pdf",
        url: "/RHOPALIAS_MACRACANTHUS",
        urlCSV: "pdf/web/species-pages/RHOPALIAS_MACRACANTHUS/RHOPALIAS MACRACANTHUS pearldata.csv"
    };
    res.render('RHOPALIAS_MACRACANTHUS', renderObj);
});

// Grab data from document
routerRHOPALIAS_MACRACANTHUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHOPALIAS_MACRACANTHUS;
