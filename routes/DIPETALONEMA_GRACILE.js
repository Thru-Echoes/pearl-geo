var express = require('express');
var routerDIPETALONEMA_GRACILE = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerDIPETALONEMA_GRACILE.get('/', function(req, res) {

    var renderObj = {
        title: "Dipetalonema gracile",
        currMap: "pdf/web/viewer.html?file=species-pages/DIPETALONEMA_GRACILE/DIPETALONEMA GRACILE current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/DIPETALONEMA_GRACILE/future-maps/future.pdf",
        url: "/DIPETALONEMA_GRACILE",
        urlCSV: "pdf/web/species-pages/DIPETALONEMA_GRACILE/DIPETALONEMA GRACILE pearldata.csv"
    };
    res.render('DIPETALONEMA_GRACILE', renderObj);
});

// Grab data from document
routerDIPETALONEMA_GRACILE.post('/', function(req, res) {

    res.end();
});

module.exports = routerDIPETALONEMA_GRACILE;
