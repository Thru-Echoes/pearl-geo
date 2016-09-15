var express = require('express');
var routerHAEMAPHYSALIS_PARALEACHI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerHAEMAPHYSALIS_PARALEACHI.get('/', function(req, res) {

    var renderObj = {
        title: "Haemaphysalis paraleachi",
        currMap: "pdf/web/viewer.html?file=species-pages/HAEMAPHYSALIS_PARALEACHI/HAEMAPHYSALIS PARALEACHI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/HAEMAPHYSALIS_PARALEACHI/future-maps/future.pdf",
        url: "/HAEMAPHYSALIS_PARALEACHI",
        urlCSV: "pdf/web/species-pages/HAEMAPHYSALIS_PARALEACHI/HAEMAPHYSALIS PARALEACHI pearldata.csv"
    };
    res.render('HAEMAPHYSALIS_PARALEACHI', renderObj);
});

// Grab data from document
routerHAEMAPHYSALIS_PARALEACHI.post('/', function(req, res) {

    res.end();
});

module.exports = routerHAEMAPHYSALIS_PARALEACHI;
