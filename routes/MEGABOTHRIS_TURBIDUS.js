var express = require('express');
var routerMEGABOTHRIS_TURBIDUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerMEGABOTHRIS_TURBIDUS.get('/', function(req, res) {

    var renderObj = {
        title: "Megabothris turbidus",
        currMap: "pdf/web/viewer.html?file=species-pages/MEGABOTHRIS_TURBIDUS/MEGABOTHRIS TURBIDUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/MEGABOTHRIS_TURBIDUS/future-maps/future.pdf",
        url: "/MEGABOTHRIS_TURBIDUS",
        urlCSV: "pdf/web/species-pages/MEGABOTHRIS_TURBIDUS/MEGABOTHRIS TURBIDUS pearldata.csv"
    };
    res.render('MEGABOTHRIS_TURBIDUS', renderObj);
});

// Grab data from document
routerMEGABOTHRIS_TURBIDUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerMEGABOTHRIS_TURBIDUS;
