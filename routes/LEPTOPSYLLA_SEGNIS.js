var express = require('express');
var routerLEPTOPSYLLA_SEGNIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerLEPTOPSYLLA_SEGNIS.get('/', function(req, res) {

    var renderObj = {
        title: "Leptopsylla segnis",
        currMap: "pdf/web/viewer.html?file=species-pages/LEPTOPSYLLA_SEGNIS/LEPTOPSYLLA SEGNIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/LEPTOPSYLLA_SEGNIS/future-maps/future.pdf",
        url: "/LEPTOPSYLLA_SEGNIS",
        urlCSV: "pdf/web/species-pages/LEPTOPSYLLA_SEGNIS/LEPTOPSYLLA SEGNIS pearldata.csv"
    };
    res.render('LEPTOPSYLLA_SEGNIS', renderObj);
});

// Grab data from document
routerLEPTOPSYLLA_SEGNIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerLEPTOPSYLLA_SEGNIS;
