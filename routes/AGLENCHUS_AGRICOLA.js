var express = require('express');
var routerAGLENCHUS_AGRICOLA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAGLENCHUS_AGRICOLA.get('/', function(req, res) {

    var renderObj = {
        title: "Aglenchus agricola",
        clade: "Nematoda",
        source: "GBIF",
        currMap: "pdf/web/viewer.html?file=species-pages/AGLENCHUS_AGRICOLA/AGLENCHUS AGRICOLA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/AGLENCHUS_AGRICOLA/future-maps/future.pdf",
        url: "/AGLENCHUS_AGRICOLA",
        urlCSV: "pdf/web/species-pages/AGLENCHUS_AGRICOLA/AGLENCHUS AGRICOLA pearldata.csv"
    };
    res.render('AGLENCHUS_AGRICOLA', renderObj);
});

// Grab data from document
routerAGLENCHUS_AGRICOLA.post('/', function(req, res) {

    res.end();
});

module.exports = routerAGLENCHUS_AGRICOLA;
