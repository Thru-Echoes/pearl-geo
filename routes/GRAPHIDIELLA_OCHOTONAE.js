var express = require('express');
var routerGRAPHIDIELLA_OCHOTONAE = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerGRAPHIDIELLA_OCHOTONAE.get('/', function(req, res) {

    var renderObj = {
        title: "Graphidiella ochotonae",
        currMap: "pdf/web/viewer.html?file=species-pages/GRAPHIDIELLA_OCHOTONAE/GRAPHIDIELLA OCHOTONAE current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/GRAPHIDIELLA_OCHOTONAE/future-maps/future.pdf",
        url: "/GRAPHIDIELLA_OCHOTONAE",
        urlCSV: "pdf/web/species-pages/GRAPHIDIELLA_OCHOTONAE/GRAPHIDIELLA OCHOTONAE pearldata.csv"
    };
    res.render('GRAPHIDIELLA_OCHOTONAE', renderObj);
});

// Grab data from document
routerGRAPHIDIELLA_OCHOTONAE.post('/', function(req, res) {

    res.end();
});

module.exports = routerGRAPHIDIELLA_OCHOTONAE;
