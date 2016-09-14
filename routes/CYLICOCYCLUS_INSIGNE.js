var express = require('express');
var routerCYLICOCYCLUS_INSIGNE = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCYLICOCYCLUS_INSIGNE.get('/', function(req, res) {

    var renderObj = {
        title: "Cylicocyclus insigne",
        currMap: "pdf/web/viewer.html?file=species-pages/CYLICOCYCLUS_INSIGNE/CYLICOCYCLUS INSIGNE current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/CYLICOCYCLUS_INSIGNE/future-maps/future.pdf",
        url: "/CYLICOCYCLUS_INSIGNE",
        urlCSV: "pdf/web/species-pages/CYLICOCYCLUS_INSIGNE/CYLICOCYCLUS INSIGNE pearldata.csv"
    };
    res.render('CYLICOCYCLUS_INSIGNE', renderObj);
});

// Grab data from document
routerCYLICOCYCLUS_INSIGNE.post('/', function(req, res) {

    res.end();
});

module.exports = routerCYLICOCYCLUS_INSIGNE;
