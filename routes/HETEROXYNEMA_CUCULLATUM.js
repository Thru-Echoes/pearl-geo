var express = require('express');
var routerHETEROXYNEMA_CUCULLATUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerHETEROXYNEMA_CUCULLATUM.get('/', function(req, res) {

    var renderObj = {
        title: "Heteroxynema cucullatum",
        currMap: "pdf/web/viewer.html?file=species-pages/HETEROXYNEMA_CUCULLATUM/HETEROXYNEMA CUCULLATUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/HETEROXYNEMA_CUCULLATUM/future-maps/future.pdf",
        url: "/HETEROXYNEMA_CUCULLATUM",
        urlCSV: "pdf/web/species-pages/HETEROXYNEMA_CUCULLATUM/HETEROXYNEMA CUCULLATUM pearldata.csv"
    };
    res.render('HETEROXYNEMA_CUCULLATUM', renderObj);
});

// Grab data from document
routerHETEROXYNEMA_CUCULLATUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerHETEROXYNEMA_CUCULLATUM;
