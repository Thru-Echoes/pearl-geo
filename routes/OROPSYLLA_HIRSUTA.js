var express = require('express');
var routerOROPSYLLA_HIRSUTA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerOROPSYLLA_HIRSUTA.get('/', function(req, res) {

    var renderObj = {
        title: "Oropsylla hirsuta",
        currMap: "pdf/web/viewer.html?file=species-pages/OROPSYLLA_HIRSUTA/OROPSYLLA HIRSUTA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/OROPSYLLA_HIRSUTA/future-maps/future.pdf",
        url: "/OROPSYLLA_HIRSUTA",
        urlCSV: "pdf/web/species-pages/OROPSYLLA_HIRSUTA/OROPSYLLA HIRSUTA pearldata.csv"
    };
    res.render('OROPSYLLA_HIRSUTA', renderObj);
});

// Grab data from document
routerOROPSYLLA_HIRSUTA.post('/', function(req, res) {

    res.end();
});

module.exports = routerOROPSYLLA_HIRSUTA;
