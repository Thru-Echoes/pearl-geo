var express = require('express');
var routerOROPSYLLA_TUBERCULATA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerOROPSYLLA_TUBERCULATA.get('/', function(req, res) {

    var renderObj = {
        title: "Oropsylla tuberculata",
        currMap: "pdf/web/viewer.html?file=species-pages/OROPSYLLA_TUBERCULATA/OROPSYLLA TUBERCULATA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/OROPSYLLA_TUBERCULATA/future-maps/future.pdf",
        url: "/OROPSYLLA_TUBERCULATA",
        urlCSV: "pdf/web/species-pages/OROPSYLLA_TUBERCULATA/OROPSYLLA TUBERCULATA pearldata.csv"
    };
    res.render('OROPSYLLA_TUBERCULATA', renderObj);
});

// Grab data from document
routerOROPSYLLA_TUBERCULATA.post('/', function(req, res) {

    res.end();
});

module.exports = routerOROPSYLLA_TUBERCULATA;
