var express = require('express');
var routerCITELLINEMA_BIFURCATUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCITELLINEMA_BIFURCATUM.get('/', function(req, res) {

    var renderObj = {
        title: "Citellinema bifurcatum",
        currMap: "pdf/web/viewer.html?file=species-pages/CITELLINEMA_BIFURCATUM/CITELLINEMA BIFURCATUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/CITELLINEMA_BIFURCATUM/future-maps/future.pdf",
        url: "/CITELLINEMA_BIFURCATUM",
        urlCSV: "pdf/web/species-pages/CITELLINEMA_BIFURCATUM/CITELLINEMA BIFURCATUM pearldata.csv"
    };
    res.render('CITELLINEMA_BIFURCATUM', renderObj);
});

// Grab data from document
routerCITELLINEMA_BIFURCATUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerCITELLINEMA_BIFURCATUM;
