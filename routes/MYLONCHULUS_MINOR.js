var express = require('express');
var routerMYLONCHULUS_MINOR = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerMYLONCHULUS_MINOR.get('/', function(req, res) {

    var renderObj = {
        title: "Mylonchulus minor",
        currMap: "pdf/web/viewer.html?file=species-pages/MYLONCHULUS_MINOR/MYLONCHULUS MINOR current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/MYLONCHULUS_MINOR/future-maps/future.pdf",
        url: "/MYLONCHULUS_MINOR",
        urlCSV: "pdf/web/species-pages/MYLONCHULUS_MINOR/MYLONCHULUS MINOR pearldata.csv"
    };
    res.render('MYLONCHULUS_MINOR', renderObj);
});

// Grab data from document
routerMYLONCHULUS_MINOR.post('/', function(req, res) {

    res.end();
});

module.exports = routerMYLONCHULUS_MINOR;
