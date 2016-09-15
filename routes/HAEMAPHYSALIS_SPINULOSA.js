var express = require('express');
var routerHAEMAPHYSALIS_SPINULOSA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerHAEMAPHYSALIS_SPINULOSA.get('/', function(req, res) {

    var renderObj = {
        title: "Haemaphysalis spinulosa",
        currMap: "pdf/web/viewer.html?file=species-pages/HAEMAPHYSALIS_SPINULOSA/HAEMAPHYSALIS SPINULOSA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/HAEMAPHYSALIS_SPINULOSA/future-maps/future.pdf",
        url: "/HAEMAPHYSALIS_SPINULOSA",
        urlCSV: "pdf/web/species-pages/HAEMAPHYSALIS_SPINULOSA/HAEMAPHYSALIS SPINULOSA pearldata.csv"
    };
    res.render('HAEMAPHYSALIS_SPINULOSA', renderObj);
});

// Grab data from document
routerHAEMAPHYSALIS_SPINULOSA.post('/', function(req, res) {

    res.end();
});

module.exports = routerHAEMAPHYSALIS_SPINULOSA;
