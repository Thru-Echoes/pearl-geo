var express = require('express');
var routerRHADINOPSYLLA_INTEGELLA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHADINOPSYLLA_INTEGELLA.get('/', function(req, res) {

    var renderObj = {
        title: "Rhadinopsylla integella",
        currMap: "pdf/web/viewer.html?file=species-pages/RHADINOPSYLLA_INTEGELLA/RHADINOPSYLLA INTEGELLA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHADINOPSYLLA_INTEGELLA/future-maps/future.pdf",
        url: "/RHADINOPSYLLA_INTEGELLA",
        urlCSV: "pdf/web/species-pages/RHADINOPSYLLA_INTEGELLA/RHADINOPSYLLA INTEGELLA pearldata.csv"
    };
    res.render('RHADINOPSYLLA_INTEGELLA', renderObj);
});

// Grab data from document
routerRHADINOPSYLLA_INTEGELLA.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHADINOPSYLLA_INTEGELLA;
