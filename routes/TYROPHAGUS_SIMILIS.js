var express = require('express');
var routerTYROPHAGUS_SIMILIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerTYROPHAGUS_SIMILIS.get('/', function(req, res) {

    var renderObj = {
        title: "Tyrophagus similis",
        currMap: "pdf/web/viewer.html?file=species-pages/TYROPHAGUS_SIMILIS/TYROPHAGUS SIMILIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/TYROPHAGUS_SIMILIS/future-maps/future.pdf",
        url: "/TYROPHAGUS_SIMILIS",
        urlCSV: "pdf/web/species-pages/TYROPHAGUS_SIMILIS/TYROPHAGUS SIMILIS pearldata.csv"
    };
    res.render('TYROPHAGUS_SIMILIS', renderObj);
});

// Grab data from document
routerTYROPHAGUS_SIMILIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerTYROPHAGUS_SIMILIS;
