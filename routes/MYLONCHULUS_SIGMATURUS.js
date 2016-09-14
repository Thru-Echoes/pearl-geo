var express = require('express');
var routerMYLONCHULUS_SIGMATURUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerMYLONCHULUS_SIGMATURUS.get('/', function(req, res) {

    var renderObj = {
        title: "Mylonchulus sigmaturus",
        currMap: "pdf/web/viewer.html?file=species-pages/MYLONCHULUS_SIGMATURUS/MYLONCHULUS SIGMATURUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/MYLONCHULUS_SIGMATURUS/future-maps/future.pdf",
        url: "/MYLONCHULUS_SIGMATURUS",
        urlCSV: "pdf/web/species-pages/MYLONCHULUS_SIGMATURUS/MYLONCHULUS SIGMATURUS pearldata.csv"
    };
    res.render('MYLONCHULUS_SIGMATURUS', renderObj);
});

// Grab data from document
routerMYLONCHULUS_SIGMATURUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerMYLONCHULUS_SIGMATURUS;
