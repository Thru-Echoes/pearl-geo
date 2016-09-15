var express = require('express');
var routerPALAEOPSYLLA_SORICIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerPALAEOPSYLLA_SORICIS.get('/', function(req, res) {

    var renderObj = {
        title: "Palaeopsylla soricis",
        currMap: "pdf/web/viewer.html?file=species-pages/PALAEOPSYLLA_SORICIS/PALAEOPSYLLA SORICIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/PALAEOPSYLLA_SORICIS/future-maps/future.pdf",
        url: "/PALAEOPSYLLA_SORICIS",
        urlCSV: "pdf/web/species-pages/PALAEOPSYLLA_SORICIS/PALAEOPSYLLA SORICIS pearldata.csv"
    };
    res.render('PALAEOPSYLLA_SORICIS', renderObj);
});

// Grab data from document
routerPALAEOPSYLLA_SORICIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerPALAEOPSYLLA_SORICIS;
