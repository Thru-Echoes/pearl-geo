var express = require('express');
var routerHAEMAPHYSALIS_PARMATA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerHAEMAPHYSALIS_PARMATA.get('/', function(req, res) {

    var renderObj = {
        title: "Haemaphysalis parmata",
        currMap: "pdf/web/viewer.html?file=species-pages/HAEMAPHYSALIS_PARMATA/HAEMAPHYSALIS PARMATA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/HAEMAPHYSALIS_PARMATA/future-maps/future.pdf",
        url: "/HAEMAPHYSALIS_PARMATA",
        urlCSV: "pdf/web/species-pages/HAEMAPHYSALIS_PARMATA/HAEMAPHYSALIS PARMATA pearldata.csv"
    };
    res.render('HAEMAPHYSALIS_PARMATA', renderObj);
});

// Grab data from document
routerHAEMAPHYSALIS_PARMATA.post('/', function(req, res) {

    res.end();
});

module.exports = routerHAEMAPHYSALIS_PARMATA;
