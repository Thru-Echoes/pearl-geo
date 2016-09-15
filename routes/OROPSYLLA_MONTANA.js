var express = require('express');
var routerOROPSYLLA_MONTANA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerOROPSYLLA_MONTANA.get('/', function(req, res) {

    var renderObj = {
        title: "Oropsylla montana",
        currMap: "pdf/web/viewer.html?file=species-pages/OROPSYLLA_MONTANA/OROPSYLLA MONTANA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/OROPSYLLA_MONTANA/future-maps/future.pdf",
        url: "/OROPSYLLA_MONTANA",
        urlCSV: "pdf/web/species-pages/OROPSYLLA_MONTANA/OROPSYLLA MONTANA pearldata.csv"
    };
    res.render('OROPSYLLA_MONTANA', renderObj);
});

// Grab data from document
routerOROPSYLLA_MONTANA.post('/', function(req, res) {

    res.end();
});

module.exports = routerOROPSYLLA_MONTANA;
