var express = require('express');
var routerPALAEOPSYLLA_KOHAUTI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerPALAEOPSYLLA_KOHAUTI.get('/', function(req, res) {

    var renderObj = {
        title: "Palaeopsylla kohauti",
        currMap: "pdf/web/viewer.html?file=species-pages/PALAEOPSYLLA_KOHAUTI/PALAEOPSYLLA KOHAUTI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/PALAEOPSYLLA_KOHAUTI/future-maps/future.pdf",
        url: "/PALAEOPSYLLA_KOHAUTI",
        urlCSV: "pdf/web/species-pages/PALAEOPSYLLA_KOHAUTI/PALAEOPSYLLA KOHAUTI pearldata.csv"
    };
    res.render('PALAEOPSYLLA_KOHAUTI', renderObj);
});

// Grab data from document
routerPALAEOPSYLLA_KOHAUTI.post('/', function(req, res) {

    res.end();
});

module.exports = routerPALAEOPSYLLA_KOHAUTI;
