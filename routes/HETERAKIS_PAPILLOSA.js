var express = require('express');
var routerHETERAKIS_PAPILLOSA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerHETERAKIS_PAPILLOSA.get('/', function(req, res) {

    var renderObj = {
        title: "Heterakis papillosa",
        currMap: "pdf/web/viewer.html?file=species-pages/HETERAKIS_PAPILLOSA/HETERAKIS PAPILLOSA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/HETERAKIS_PAPILLOSA/future-maps/future.pdf",
        url: "/HETERAKIS_PAPILLOSA",
        urlCSV: "pdf/web/species-pages/HETERAKIS_PAPILLOSA/HETERAKIS PAPILLOSA pearldata.csv"
    };
    res.render('HETERAKIS_PAPILLOSA', renderObj);
});

// Grab data from document
routerHETERAKIS_PAPILLOSA.post('/', function(req, res) {

    res.end();
});

module.exports = routerHETERAKIS_PAPILLOSA;
