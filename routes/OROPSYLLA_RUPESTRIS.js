var express = require('express');
var routerOROPSYLLA_RUPESTRIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerOROPSYLLA_RUPESTRIS.get('/', function(req, res) {

    var renderObj = {
        title: "Oropsylla rupestris",
        currMap: "pdf/web/viewer.html?file=species-pages/OROPSYLLA_RUPESTRIS/OROPSYLLA RUPESTRIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/OROPSYLLA_RUPESTRIS/future-maps/future.pdf",
        url: "/OROPSYLLA_RUPESTRIS",
        urlCSV: "pdf/web/species-pages/OROPSYLLA_RUPESTRIS/OROPSYLLA RUPESTRIS pearldata.csv"
    };
    res.render('OROPSYLLA_RUPESTRIS', renderObj);
});

// Grab data from document
routerOROPSYLLA_RUPESTRIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerOROPSYLLA_RUPESTRIS;
