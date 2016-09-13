var express = require('express');
var routerLEPTOLAIMUS_PUCCINELLIAE = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerLEPTOLAIMUS_PUCCINELLIAE.get('/', function(req, res) {

    var renderObj = {
        title: "Leptolaimus puccinelliae",
        currMap: "pdf/web/viewer.html?file=species-pages/LEPTOLAIMUS_PUCCINELLIAE/LEPTOLAIMUS PUCCINELLIAE current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/LEPTOLAIMUS_PUCCINELLIAE/future-maps/future.pdf",
        url: "/LEPTOLAIMUS_PUCCINELLIAE",
        urlCSV: "pdf/web/species-pages/LEPTOLAIMUS_PUCCINELLIAE/LEPTOLAIMUS PUCCINELLIAE pearldata.csv"
    };
    res.render('LEPTOLAIMUS_PUCCINELLIAE', renderObj);
});

// Grab data from document
routerLEPTOLAIMUS_PUCCINELLIAE.post('/', function(req, res) {

    res.end();
});

module.exports = routerLEPTOLAIMUS_PUCCINELLIAE;
