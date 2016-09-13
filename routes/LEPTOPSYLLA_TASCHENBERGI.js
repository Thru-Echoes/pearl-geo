var express = require('express');
var routerLEPTOPSYLLA_TASCHENBERGI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerLEPTOPSYLLA_TASCHENBERGI.get('/', function(req, res) {

    var renderObj = {
        title: "Leptopsylla taschenbergi",
        currMap: "pdf/web/viewer.html?file=species-pages/LEPTOPSYLLA_TASCHENBERGI/LEPTOPSYLLA TASCHENBERGI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/LEPTOPSYLLA_TASCHENBERGI/future-maps/future.pdf",
        url: "/LEPTOPSYLLA_TASCHENBERGI",
        urlCSV: "pdf/web/species-pages/LEPTOPSYLLA_TASCHENBERGI/LEPTOPSYLLA TASCHENBERGI pearldata.csv"
    };
    res.render('LEPTOPSYLLA_TASCHENBERGI', renderObj);
});

// Grab data from document
routerLEPTOPSYLLA_TASCHENBERGI.post('/', function(req, res) {

    res.end();
});

module.exports = routerLEPTOPSYLLA_TASCHENBERGI;
