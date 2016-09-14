var express = require('express');
var routerMEGALODISCUS_TEMPERATUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerMEGALODISCUS_TEMPERATUS.get('/', function(req, res) {

    var renderObj = {
        title: "Megalodiscus temperatus",
        currMap: "pdf/web/viewer.html?file=species-pages/MEGALODISCUS_TEMPERATUS/MEGALODISCUS TEMPERATUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/MEGALODISCUS_TEMPERATUS/future-maps/future.pdf",
        url: "/MEGALODISCUS_TEMPERATUS",
        urlCSV: "pdf/web/species-pages/MEGALODISCUS_TEMPERATUS/MEGALODISCUS TEMPERATUS pearldata.csv"
    };
    res.render('MEGALODISCUS_TEMPERATUS', renderObj);
});

// Grab data from document
routerMEGALODISCUS_TEMPERATUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerMEGALODISCUS_TEMPERATUS;
