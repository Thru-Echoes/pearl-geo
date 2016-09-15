var express = require('express');
var routerPROSTHENORCHIS_ELEGANS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerPROSTHENORCHIS_ELEGANS.get('/', function(req, res) {

    var renderObj = {
        title: "Prosthenorchis elegans",
        currMap: "pdf/web/viewer.html?file=species-pages/PROSTHENORCHIS_ELEGANS/PROSTHENORCHIS ELEGANS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/PROSTHENORCHIS_ELEGANS/future-maps/future.pdf",
        url: "/PROSTHENORCHIS_ELEGANS",
        urlCSV: "pdf/web/species-pages/PROSTHENORCHIS_ELEGANS/PROSTHENORCHIS ELEGANS pearldata.csv"
    };
    res.render('PROSTHENORCHIS_ELEGANS', renderObj);
});

// Grab data from document
routerPROSTHENORCHIS_ELEGANS.post('/', function(req, res) {

    res.end();
});

module.exports = routerPROSTHENORCHIS_ELEGANS;
