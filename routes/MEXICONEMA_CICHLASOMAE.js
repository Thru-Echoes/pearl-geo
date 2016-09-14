var express = require('express');
var routerMEXICONEMA_CICHLASOMAE = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerMEXICONEMA_CICHLASOMAE.get('/', function(req, res) {

    var renderObj = {
        title: "Mexiconema cichlasomae",
        currMap: "pdf/web/viewer.html?file=species-pages/MEXICONEMA_CICHLASOMAE/MEXICONEMA CICHLASOMAE current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/MEXICONEMA_CICHLASOMAE/future-maps/future.pdf",
        url: "/MEXICONEMA_CICHLASOMAE",
        urlCSV: "pdf/web/species-pages/MEXICONEMA_CICHLASOMAE/MEXICONEMA CICHLASOMAE pearldata.csv"
    };
    res.render('MEXICONEMA_CICHLASOMAE', renderObj);
});

// Grab data from document
routerMEXICONEMA_CICHLASOMAE.post('/', function(req, res) {

    res.end();
});

module.exports = routerMEXICONEMA_CICHLASOMAE;
