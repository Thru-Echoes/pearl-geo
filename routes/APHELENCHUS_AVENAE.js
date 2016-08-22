var express = require('express');
var routerAPHELENCHUS_AVENAE = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAPHELENCHUS_AVENAE.get('/', function(req, res) {

    var renderObj = {
        title: "Aphelenchus avenae",
        currMap: "pdf/web/viewer.html?file=species-pages/APHELENCHUS_AVENAE/APHELENCHUS AVENAE current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/APHELENCHUS_AVENAE/future-maps/future.pdf",
        url: "/APHELENCHUS_AVENAE",
        urlCSV: "pdf/web/species-pages/APHELENCHUS_AVENAE/APHELENCHUS AVENAE pearldata.csv"
    };
    res.render('APHELENCHUS_AVENAE', renderObj);
});

// Grab data from document
routerAPHELENCHUS_AVENAE.post('/', function(req, res) {

    res.end();
});

module.exports = routerAPHELENCHUS_AVENAE;
