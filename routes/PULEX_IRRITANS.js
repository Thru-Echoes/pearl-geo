var express = require('express');
var routerPULEX_IRRITANS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerPULEX_IRRITANS.get('/', function(req, res) {

    var renderObj = {
        title: "Pulex irritans",
        currMap: "pdf/web/viewer.html?file=species-pages/PULEX_IRRITANS/PULEX IRRITANS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/PULEX_IRRITANS/future-maps/future.pdf",
        url: "/PULEX_IRRITANS",
        urlCSV: "pdf/web/species-pages/PULEX_IRRITANS/PULEX IRRITANS pearldata.csv"
    };
    res.render('PULEX_IRRITANS', renderObj);
});

// Grab data from document
routerPULEX_IRRITANS.post('/', function(req, res) {

    res.end();
});

module.exports = routerPULEX_IRRITANS;
