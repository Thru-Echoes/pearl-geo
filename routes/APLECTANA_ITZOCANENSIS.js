var express = require('express');
var routerAPLECTANA_ITZOCANENSIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAPLECTANA_ITZOCANENSIS.get('/', function(req, res) {

    var renderObj = {
        title: "Aplectana itzocanensis",
        currMap: "pdf/web/viewer.html?file=species-pages/APLECTANA_ITZOCANENSIS/APLECTANA ITZOCANENSIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/APLECTANA_ITZOCANENSIS/future-maps/future.pdf",
        url: "/APLECTANA_ITZOCANENSIS",
        urlCSV: "pdf/web/species-pages/APLECTANA_ITZOCANENSIS/APLECTANA ITZOCANENSIS pearldata.csv"
    };
    res.render('APLECTANA_ITZOCANENSIS', renderObj);
});

// Grab data from document
routerAPLECTANA_ITZOCANENSIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerAPLECTANA_ITZOCANENSIS;
