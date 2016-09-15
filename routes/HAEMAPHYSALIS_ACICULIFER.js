var express = require('express');
var routerHAEMAPHYSALIS_ACICULIFER = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerHAEMAPHYSALIS_ACICULIFER.get('/', function(req, res) {

    var renderObj = {
        title: "Haemaphysalis aciculifer",
        currMap: "pdf/web/viewer.html?file=species-pages/HAEMAPHYSALIS_ACICULIFER/HAEMAPHYSALIS ACICULIFER current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/HAEMAPHYSALIS_ACICULIFER/future-maps/future.pdf",
        url: "/HAEMAPHYSALIS_ACICULIFER",
        urlCSV: "pdf/web/species-pages/HAEMAPHYSALIS_ACICULIFER/HAEMAPHYSALIS ACICULIFER pearldata.csv"
    };
    res.render('HAEMAPHYSALIS_ACICULIFER', renderObj);
});

// Grab data from document
routerHAEMAPHYSALIS_ACICULIFER.post('/', function(req, res) {

    res.end();
});

module.exports = routerHAEMAPHYSALIS_ACICULIFER;
