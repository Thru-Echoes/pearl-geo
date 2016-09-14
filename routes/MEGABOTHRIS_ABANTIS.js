var express = require('express');
var routerMEGABOTHRIS_ABANTIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerMEGABOTHRIS_ABANTIS.get('/', function(req, res) {

    var renderObj = {
        title: "Megabothris abantis",
        currMap: "pdf/web/viewer.html?file=species-pages/MEGABOTHRIS_ABANTIS/MEGABOTHRIS ABANTIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/MEGABOTHRIS_ABANTIS/future-maps/future.pdf",
        url: "/MEGABOTHRIS_ABANTIS",
        urlCSV: "pdf/web/species-pages/MEGABOTHRIS_ABANTIS/MEGABOTHRIS ABANTIS pearldata.csv"
    };
    res.render('MEGABOTHRIS_ABANTIS', renderObj);
});

// Grab data from document
routerMEGABOTHRIS_ABANTIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerMEGABOTHRIS_ABANTIS;
