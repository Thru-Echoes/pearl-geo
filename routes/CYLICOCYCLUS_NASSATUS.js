var express = require('express');
var routerCYLICOCYCLUS_NASSATUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCYLICOCYCLUS_NASSATUS.get('/', function(req, res) {

    var renderObj = {
        title: "Cylicocyclus nassatus",
        currMap: "pdf/web/viewer.html?file=species-pages/CYLICOCYCLUS_NASSATUS/CYLICOCYCLUS NASSATUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/CYLICOCYCLUS_NASSATUS/future-maps/future.pdf",
        url: "/CYLICOCYCLUS_NASSATUS",
        urlCSV: "pdf/web/species-pages/CYLICOCYCLUS_NASSATUS/CYLICOCYCLUS NASSATUS pearldata.csv"
    };
    res.render('CYLICOCYCLUS_NASSATUS', renderObj);
});

// Grab data from document
routerCYLICOCYCLUS_NASSATUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerCYLICOCYCLUS_NASSATUS;
