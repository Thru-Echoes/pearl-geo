var express = require('express');
var routerIXODES_ANGUSTUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerIXODES_ANGUSTUS.get('/', function(req, res) {

    var renderObj = {
        title: "Ixodes angustus",
        currMap: "pdf/web/viewer.html?file=species-pages/IXODES_ANGUSTUS/IXODES ANGUSTUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/IXODES_ANGUSTUS/future-maps/future.pdf",
        url: "/IXODES_ANGUSTUS",
        urlCSV: "pdf/web/species-pages/IXODES_ANGUSTUS/IXODES ANGUSTUS pearldata.csv"
    };
    res.render('IXODES_ANGUSTUS', renderObj);
});

// Grab data from document
routerIXODES_ANGUSTUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerIXODES_ANGUSTUS;
