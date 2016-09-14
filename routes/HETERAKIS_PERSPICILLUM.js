var express = require('express');
var routerHETERAKIS_PERSPICILLUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerHETERAKIS_PERSPICILLUM.get('/', function(req, res) {

    var renderObj = {
        title: "Heterakis perspicillum",
        currMap: "pdf/web/viewer.html?file=species-pages/HETERAKIS_PERSPICILLUM/HETERAKIS PERSPICILLUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/HETERAKIS_PERSPICILLUM/future-maps/future.pdf",
        url: "/HETERAKIS_PERSPICILLUM",
        urlCSV: "pdf/web/species-pages/HETERAKIS_PERSPICILLUM/HETERAKIS PERSPICILLUM pearldata.csv"
    };
    res.render('HETERAKIS_PERSPICILLUM', renderObj);
});

// Grab data from document
routerHETERAKIS_PERSPICILLUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerHETERAKIS_PERSPICILLUM;
