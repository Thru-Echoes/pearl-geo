var express = require('express');
var routerAMALARAEUS_PENICILLIGER = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAMALARAEUS_PENICILLIGER.get('/', function(req, res) {
    var renderObj = {
        title: "Amalaraeus penicilliger",
        clade: "Siphonaptera",
        source: "GBIF",
        currMap: "pdf/web/viewer.html?file=species-pages/AMALARAEUS_PENICILLIGER/AMALARAEUS PENICILLIGER current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/AMALARAEUS_PENICILLIGER/future-maps/future.pdf",
        url: "/AMALARAEUS_PENICILLIGER",
        urlCSV: "pdf/web/species-pages/AMALARAEUS_PENICILLIGER/AMALARAEUS PENICILLIGER pearldata.csv"
    };
    res.render('AMALARAEUS_PENICILLIGER', renderObj);
});

// Grab data from document
routerAMALARAEUS_PENICILLIGER.post('/', function(req, res) {

    res.end();
});

module.exports = routerAMALARAEUS_PENICILLIGER;
