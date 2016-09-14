var express = require('express');
var routerTABASCOTREMA_VERAI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerTABASCOTREMA_VERAI.get('/', function(req, res) {

    var renderObj = {
        title: "Tabascotrema verai",
        currMap: "pdf/web/viewer.html?file=species-pages/TABASCOTREMA_VERAI/TABASCOTREMA VERAI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/TABASCOTREMA_VERAI/future-maps/future.pdf",
        url: "/TABASCOTREMA_VERAI",
        urlCSV: "pdf/web/species-pages/TABASCOTREMA_VERAI/TABASCOTREMA VERAI pearldata.csv"
    };
    res.render('TABASCOTREMA_VERAI', renderObj);
});

// Grab data from document
routerTABASCOTREMA_VERAI.post('/', function(req, res) {

    res.end();
});

module.exports = routerTABASCOTREMA_VERAI;
