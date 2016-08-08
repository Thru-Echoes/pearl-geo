var express = require('express');
var routerAmam = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAmam.get('/', function(req, res) {

    var renderObj = {
        title: "Amblyomma americanum",
        clade: "Ixodida",
        source: "GBIF USNPC",
        currMap: "pdf/web/viewer.html?file=species-pages/amam/AMBLYOMMA AMERICANUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/amam/future-maps/future.pdf",
        url: "/amam",
        urlCSV: "pdf/web/species-pages/amam/AMBLYOMMA AMERICANUM pearldata.csv"
    };
    res.render('Amam', renderObj);
});

// Grab data from document
routerAmam.post('/', function(req, res) {

    res.end();
});

module.exports = routerAmam;
