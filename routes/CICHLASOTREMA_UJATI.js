var express = require('express');
var routerCICHLASOTREMA_UJATI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCICHLASOTREMA_UJATI.get('/', function(req, res) {

    var renderObj = {
        title: "Cichlasotrema ujati",
        currMap: "pdf/web/viewer.html?file=species-pages/CICHLASOTREMA_UJATI/CICHLASOTREMA UJATI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/CICHLASOTREMA_UJATI/future-maps/future.pdf",
        url: "/CICHLASOTREMA_UJATI",
        urlCSV: "pdf/web/species-pages/CICHLASOTREMA_UJATI/CICHLASOTREMA UJATI pearldata.csv"
    };
    res.render('CICHLASOTREMA_UJATI', renderObj);
});

// Grab data from document
routerCICHLASOTREMA_UJATI.post('/', function(req, res) {

    res.end();
});

module.exports = routerCICHLASOTREMA_UJATI;
