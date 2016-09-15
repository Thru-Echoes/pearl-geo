var express = require('express');
var routerHAEMAPHYSALIS_CORNIGERA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerHAEMAPHYSALIS_CORNIGERA.get('/', function(req, res) {

    var renderObj = {
        title: "Haemaphysalis cornigera",
        currMap: "pdf/web/viewer.html?file=species-pages/HAEMAPHYSALIS_CORNIGERA/HAEMAPHYSALIS CORNIGERA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/HAEMAPHYSALIS_CORNIGERA/future-maps/future.pdf",
        url: "/HAEMAPHYSALIS_CORNIGERA",
        urlCSV: "pdf/web/species-pages/HAEMAPHYSALIS_CORNIGERA/HAEMAPHYSALIS CORNIGERA pearldata.csv"
    };
    res.render('HAEMAPHYSALIS_CORNIGERA', renderObj);
});

// Grab data from document
routerHAEMAPHYSALIS_CORNIGERA.post('/', function(req, res) {

    res.end();
});

module.exports = routerHAEMAPHYSALIS_CORNIGERA;
