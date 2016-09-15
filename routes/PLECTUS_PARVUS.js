var express = require('express');
var routerPLECTUS_PARVUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerPLECTUS_PARVUS.get('/', function(req, res) {

    var renderObj = {
        title: "Plectus parvus",
        currMap: "pdf/web/viewer.html?file=species-pages/PLECTUS_PARVUS/PLECTUS PARVUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/PLECTUS_PARVUS/future-maps/future.pdf",
        url: "/PLECTUS_PARVUS",
        urlCSV: "pdf/web/species-pages/PLECTUS_PARVUS/PLECTUS PARVUS pearldata.csv"
    };
    res.render('PLECTUS_PARVUS', renderObj);
});

// Grab data from document
routerPLECTUS_PARVUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerPLECTUS_PARVUS;
