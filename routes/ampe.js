var express = require('express');
var routerAmpe = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAmpe.get('/', function(req, res) {
    var renderObj = {
        title: "Amalaraeus penicilliger",
        clade: "Siphonaptera",
        source: "GBIF",
        currMap: "pdf/web/viewer.html?file=species-pages/ampe/AMALARAEUS PENICILLIGER current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/ampe/future-maps/future.pdf",
        url: "/ampe",
        urlCSV: "pdf/web/species-pages/ampe/AMALARAEUS PENICILLIGER pearldata.csv"
    };
    res.render('Ampe', renderObj);
});

// Grab data from document
routerAmpe.post('/', function(req, res) {

    res.end();
});

module.exports = routerAmpe;
