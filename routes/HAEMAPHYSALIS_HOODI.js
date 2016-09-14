var express = require('express');
var routerHAEMAPHYSALIS_HOODI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerHAEMAPHYSALIS_HOODI.get('/', function(req, res) {

    var renderObj = {
        title: "Haemaphysalis hoodi",
        currMap: "pdf/web/viewer.html?file=species-pages/HAEMAPHYSALIS_HOODI/HAEMAPHYSALIS HOODI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/HAEMAPHYSALIS_HOODI/future-maps/future.pdf",
        url: "/HAEMAPHYSALIS_HOODI",
        urlCSV: "pdf/web/species-pages/HAEMAPHYSALIS_HOODI/HAEMAPHYSALIS HOODI pearldata.csv"
    };
    res.render('HAEMAPHYSALIS_HOODI', renderObj);
});

// Grab data from document
routerHAEMAPHYSALIS_HOODI.post('/', function(req, res) {

    res.end();
});

module.exports = routerHAEMAPHYSALIS_HOODI;
