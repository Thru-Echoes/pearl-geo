var express = require('express');
var routerHAEMAPHYSALIS_SILACEA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerHAEMAPHYSALIS_SILACEA.get('/', function(req, res) {

    var renderObj = {
        title: "Haemaphysalis silacea",
        currMap: "pdf/web/viewer.html?file=species-pages/HAEMAPHYSALIS_SILACEA/HAEMAPHYSALIS SILACEA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/HAEMAPHYSALIS_SILACEA/future-maps/future.pdf",
        url: "/HAEMAPHYSALIS_SILACEA",
        urlCSV: "pdf/web/species-pages/HAEMAPHYSALIS_SILACEA/HAEMAPHYSALIS SILACEA pearldata.csv"
    };
    res.render('HAEMAPHYSALIS_SILACEA', renderObj);
});

// Grab data from document
routerHAEMAPHYSALIS_SILACEA.post('/', function(req, res) {

    res.end();
});

module.exports = routerHAEMAPHYSALIS_SILACEA;
