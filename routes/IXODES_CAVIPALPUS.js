var express = require('express');
var routerIXODES_CAVIPALPUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerIXODES_CAVIPALPUS.get('/', function(req, res) {

    var renderObj = {
        title: "Ixodes cavipalpus",
        currMap: "pdf/web/viewer.html?file=species-pages/IXODES_CAVIPALPUS/IXODES CAVIPALPUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/IXODES_CAVIPALPUS/future-maps/future.pdf",
        url: "/IXODES_CAVIPALPUS",
        urlCSV: "pdf/web/species-pages/IXODES_CAVIPALPUS/IXODES CAVIPALPUS pearldata.csv"
    };
    res.render('IXODES_CAVIPALPUS', renderObj);
});

// Grab data from document
routerIXODES_CAVIPALPUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerIXODES_CAVIPALPUS;
