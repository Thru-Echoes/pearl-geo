var express = require('express');
var routerAPHELENCHUS_PARIETINUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAPHELENCHUS_PARIETINUS.get('/', function(req, res) {

    var renderObj = {
        title: "Aphelenchus parietinus",
        currMap: "pdf/web/viewer.html?file=species-pages/APHELENCHUS_PARIETINUS/APHELENCHUS PARIETINUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/APHELENCHUS_PARIETINUS/future-maps/future.pdf",
        url: "/APHELENCHUS_PARIETINUS",
        urlCSV: "pdf/web/species-pages/APHELENCHUS_PARIETINUS/APHELENCHUS PARIETINUS pearldata.csv"
    };
    res.render('APHELENCHUS_PARIETINUS', renderObj);
});

// Grab data from document
routerAPHELENCHUS_PARIETINUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerAPHELENCHUS_PARIETINUS;
