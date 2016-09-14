var express = require('express');
var routerTELADORSAGIA_CIRCUMCINCTA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerTELADORSAGIA_CIRCUMCINCTA.get('/', function(req, res) {

    var renderObj = {
        title: "Teladorsagia circumcincta",
        currMap: "pdf/web/viewer.html?file=species-pages/TELADORSAGIA_CIRCUMCINCTA/TELADORSAGIA CIRCUMCINCTA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/TELADORSAGIA_CIRCUMCINCTA/future-maps/future.pdf",
        url: "/TELADORSAGIA_CIRCUMCINCTA",
        urlCSV: "pdf/web/species-pages/TELADORSAGIA_CIRCUMCINCTA/TELADORSAGIA CIRCUMCINCTA pearldata.csv"
    };
    res.render('TELADORSAGIA_CIRCUMCINCTA', renderObj);
});

// Grab data from document
routerTELADORSAGIA_CIRCUMCINCTA.post('/', function(req, res) {

    res.end();
});

module.exports = routerTELADORSAGIA_CIRCUMCINCTA;
