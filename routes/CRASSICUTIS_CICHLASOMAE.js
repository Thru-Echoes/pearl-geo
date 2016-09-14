var express = require('express');
var routerCRASSICUTIS_CICHLASOMAE = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCRASSICUTIS_CICHLASOMAE.get('/', function(req, res) {

    var renderObj = {
        title: "Crassicutis cichlasomae",
        currMap: "pdf/web/viewer.html?file=species-pages/CRASSICUTIS_CICHLASOMAE/CRASSICUTIS CICHLASOMAE current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/CRASSICUTIS_CICHLASOMAE/future-maps/future.pdf",
        url: "/CRASSICUTIS_CICHLASOMAE",
        urlCSV: "pdf/web/species-pages/CRASSICUTIS_CICHLASOMAE/CRASSICUTIS CICHLASOMAE pearldata.csv"
    };
    res.render('CRASSICUTIS_CICHLASOMAE', renderObj);
});

// Grab data from document
routerCRASSICUTIS_CICHLASOMAE.post('/', function(req, res) {

    res.end();
});

module.exports = routerCRASSICUTIS_CICHLASOMAE;
