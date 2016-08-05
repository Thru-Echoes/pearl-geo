var express = require('express');
var routerAgag = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAgag.get('/', function(req, res) {

    var renderObj = {
        title: "Aglenchus agricola",
        clade: "Nematoda",
        source: "GBIF",
        currMap: "pdf/web/viewer.html?file=species-pages/agag/AGLENCHUS AGRICOLA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/agag/future-maps/AGLENCHUS AGRICOLA future.pdf",
        crStatus: "CR",
        dataQuality: "Fair",
        modelQuality: "Good",
        url: "/agag",
        urlCSV: "pdf/web/species-pages/agag/AGLENCHUS AGRICOLA pearldata.csv"
    };
    res.render('Agag', renderObj);
});

// Grab data from document
routerAgag.post('/', function(req, res) {

    res.end();
});

module.exports = routerAgag;
