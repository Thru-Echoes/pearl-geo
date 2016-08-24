var express = require('express');
var routerHYMENOLEPIS_DIMINUTA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerHYMENOLEPIS_DIMINUTA.get('/', function(req, res) {

    var renderObj = {
        title: "Hymenolepis diminuta",
        currMap: "pdf/web/viewer.html?file=species-pages/HYMENOLEPIS_DIMINUTA/HYMENOLEPIS DIMINUTA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/HYMENOLEPIS_DIMINUTA/future-maps/future.pdf",
        url: "/HYMENOLEPIS_DIMINUTA",
        urlCSV: "pdf/web/species-pages/HYMENOLEPIS_DIMINUTA/HYMENOLEPIS DIMINUTA pearldata.csv"
    };
    res.render('HYMENOLEPIS_DIMINUTA', renderObj);
});

// Grab data from document
routerHYMENOLEPIS_DIMINUTA.post('/', function(req, res) {

    res.end();
});

module.exports = routerHYMENOLEPIS_DIMINUTA;
