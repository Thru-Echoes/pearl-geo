var express = require('express');
var routerHAEMAPHYSALIS_PUNCTATA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerHAEMAPHYSALIS_PUNCTATA.get('/', function(req, res) {

    var renderObj = {
        title: "Haemaphysalis punctata",
        currMap: "pdf/web/viewer.html?file=species-pages/HAEMAPHYSALIS_PUNCTATA/HAEMAPHYSALIS PUNCTATA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/HAEMAPHYSALIS_PUNCTATA/future-maps/future.pdf",
        url: "/HAEMAPHYSALIS_PUNCTATA",
        urlCSV: "pdf/web/species-pages/HAEMAPHYSALIS_PUNCTATA/HAEMAPHYSALIS PUNCTATA pearldata.csv"
    };
    res.render('HAEMAPHYSALIS_PUNCTATA', renderObj);
});

// Grab data from document
routerHAEMAPHYSALIS_PUNCTATA.post('/', function(req, res) {

    res.end();
});

module.exports = routerHAEMAPHYSALIS_PUNCTATA;
