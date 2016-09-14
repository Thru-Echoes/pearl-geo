var express = require('express');
var routerECHINOSTOMA_REVOLUTUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerECHINOSTOMA_REVOLUTUM.get('/', function(req, res) {

    var renderObj = {
        title: "Echinostoma revolutum",
        currMap: "pdf/web/viewer.html?file=species-pages/ECHINOSTOMA_REVOLUTUM/ECHINOSTOMA REVOLUTUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/ECHINOSTOMA_REVOLUTUM/future-maps/future.pdf",
        url: "/ECHINOSTOMA_REVOLUTUM",
        urlCSV: "pdf/web/species-pages/ECHINOSTOMA_REVOLUTUM/ECHINOSTOMA REVOLUTUM pearldata.csv"
    };
    res.render('ECHINOSTOMA_REVOLUTUM', renderObj);
});

// Grab data from document
routerECHINOSTOMA_REVOLUTUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerECHINOSTOMA_REVOLUTUM;
