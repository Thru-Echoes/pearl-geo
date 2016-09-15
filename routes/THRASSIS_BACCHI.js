var express = require('express');
var routerTHRASSIS_BACCHI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerTHRASSIS_BACCHI.get('/', function(req, res) {

    var renderObj = {
        title: "Thrassis bacchi",
        currMap: "pdf/web/viewer.html?file=species-pages/THRASSIS_BACCHI/THRASSIS BACCHI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/THRASSIS_BACCHI/future-maps/future.pdf",
        url: "/THRASSIS_BACCHI",
        urlCSV: "pdf/web/species-pages/THRASSIS_BACCHI/THRASSIS BACCHI pearldata.csv"
    };
    res.render('THRASSIS_BACCHI', renderObj);
});

// Grab data from document
routerTHRASSIS_BACCHI.post('/', function(req, res) {

    res.end();
});

module.exports = routerTHRASSIS_BACCHI;
