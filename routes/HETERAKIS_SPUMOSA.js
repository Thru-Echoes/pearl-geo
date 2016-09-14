var express = require('express');
var routerHETERAKIS_SPUMOSA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerHETERAKIS_SPUMOSA.get('/', function(req, res) {

    var renderObj = {
        title: "Heterakis spumosa",
        currMap: "pdf/web/viewer.html?file=species-pages/HETERAKIS_SPUMOSA/HETERAKIS SPUMOSA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/HETERAKIS_SPUMOSA/future-maps/future.pdf",
        url: "/HETERAKIS_SPUMOSA",
        urlCSV: "pdf/web/species-pages/HETERAKIS_SPUMOSA/HETERAKIS SPUMOSA pearldata.csv"
    };
    res.render('HETERAKIS_SPUMOSA', renderObj);
});

// Grab data from document
routerHETERAKIS_SPUMOSA.post('/', function(req, res) {

    res.end();
});

module.exports = routerHETERAKIS_SPUMOSA;
