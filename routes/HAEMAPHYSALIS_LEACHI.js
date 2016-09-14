var express = require('express');
var routerHAEMAPHYSALIS_LEACHI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerHAEMAPHYSALIS_LEACHI.get('/', function(req, res) {

    var renderObj = {
        title: "Haemaphysalis leachi",
        currMap: "pdf/web/viewer.html?file=species-pages/HAEMAPHYSALIS_LEACHI/HAEMAPHYSALIS LEACHI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/HAEMAPHYSALIS_LEACHI/future-maps/future.pdf",
        url: "/HAEMAPHYSALIS_LEACHI",
        urlCSV: "pdf/web/species-pages/HAEMAPHYSALIS_LEACHI/HAEMAPHYSALIS LEACHI pearldata.csv"
    };
    res.render('HAEMAPHYSALIS_LEACHI', renderObj);
});

// Grab data from document
routerHAEMAPHYSALIS_LEACHI.post('/', function(req, res) {

    res.end();
});

module.exports = routerHAEMAPHYSALIS_LEACHI;
