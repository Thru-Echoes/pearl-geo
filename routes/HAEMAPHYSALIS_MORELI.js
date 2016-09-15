var express = require('express');
var routerHAEMAPHYSALIS_MORELI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerHAEMAPHYSALIS_MORELI.get('/', function(req, res) {

    var renderObj = {
        title: "Haemaphysalis moreli",
        currMap: "pdf/web/viewer.html?file=species-pages/HAEMAPHYSALIS_MORELI/HAEMAPHYSALIS MORELI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/HAEMAPHYSALIS_MORELI/future-maps/future.pdf",
        url: "/HAEMAPHYSALIS_MORELI",
        urlCSV: "pdf/web/species-pages/HAEMAPHYSALIS_MORELI/HAEMAPHYSALIS MORELI pearldata.csv"
    };
    res.render('HAEMAPHYSALIS_MORELI', renderObj);
});

// Grab data from document
routerHAEMAPHYSALIS_MORELI.post('/', function(req, res) {

    res.end();
});

module.exports = routerHAEMAPHYSALIS_MORELI;
