var express = require('express');
var routerPULEX_SIMULANS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerPULEX_SIMULANS.get('/', function(req, res) {

    var renderObj = {
        title: "Pulex simulans",
        currMap: "pdf/web/viewer.html?file=species-pages/PULEX_SIMULANS/PULEX SIMULANS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/PULEX_SIMULANS/future-maps/future.pdf",
        url: "/PULEX_SIMULANS",
        urlCSV: "pdf/web/species-pages/PULEX_SIMULANS/PULEX SIMULANS pearldata.csv"
    };
    res.render('PULEX_SIMULANS', renderObj);
});

// Grab data from document
routerPULEX_SIMULANS.post('/', function(req, res) {

    res.end();
});

module.exports = routerPULEX_SIMULANS;
