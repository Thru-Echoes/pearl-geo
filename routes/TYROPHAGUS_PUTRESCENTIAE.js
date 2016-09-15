var express = require('express');
var routerTYROPHAGUS_PUTRESCENTIAE = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerTYROPHAGUS_PUTRESCENTIAE.get('/', function(req, res) {

    var renderObj = {
        title: "Tyrophagus putrescentiae",
        currMap: "pdf/web/viewer.html?file=species-pages/TYROPHAGUS_PUTRESCENTIAE/TYROPHAGUS PUTRESCENTIAE current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/TYROPHAGUS_PUTRESCENTIAE/future-maps/future.pdf",
        url: "/TYROPHAGUS_PUTRESCENTIAE",
        urlCSV: "pdf/web/species-pages/TYROPHAGUS_PUTRESCENTIAE/TYROPHAGUS PUTRESCENTIAE pearldata.csv"
    };
    res.render('TYROPHAGUS_PUTRESCENTIAE', renderObj);
});

// Grab data from document
routerTYROPHAGUS_PUTRESCENTIAE.post('/', function(req, res) {

    res.end();
});

module.exports = routerTYROPHAGUS_PUTRESCENTIAE;
