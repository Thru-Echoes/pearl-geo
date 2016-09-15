var express = require('express');
var routerHETERAKIS_GALLINAE = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerHETERAKIS_GALLINAE.get('/', function(req, res) {

    var renderObj = {
        title: "Heterakis gallinae",
        currMap: "pdf/web/viewer.html?file=species-pages/HETERAKIS_GALLINAE/HETERAKIS GALLINAE current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/HETERAKIS_GALLINAE/future-maps/future.pdf",
        url: "/HETERAKIS_GALLINAE",
        urlCSV: "pdf/web/species-pages/HETERAKIS_GALLINAE/HETERAKIS GALLINAE pearldata.csv"
    };
    res.render('HETERAKIS_GALLINAE', renderObj);
});

// Grab data from document
routerHETERAKIS_GALLINAE.post('/', function(req, res) {

    res.end();
});

module.exports = routerHETERAKIS_GALLINAE;
