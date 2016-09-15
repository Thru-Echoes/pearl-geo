var express = require('express');
var routerHAEMAPHYSALIS_HOUYI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerHAEMAPHYSALIS_HOUYI.get('/', function(req, res) {

    var renderObj = {
        title: "Haemaphysalis houyi",
        currMap: "pdf/web/viewer.html?file=species-pages/HAEMAPHYSALIS_HOUYI/HAEMAPHYSALIS HOUYI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/HAEMAPHYSALIS_HOUYI/future-maps/future.pdf",
        url: "/HAEMAPHYSALIS_HOUYI",
        urlCSV: "pdf/web/species-pages/HAEMAPHYSALIS_HOUYI/HAEMAPHYSALIS HOUYI pearldata.csv"
    };
    res.render('HAEMAPHYSALIS_HOUYI', renderObj);
});

// Grab data from document
routerHAEMAPHYSALIS_HOUYI.post('/', function(req, res) {

    res.end();
});

module.exports = routerHAEMAPHYSALIS_HOUYI;
