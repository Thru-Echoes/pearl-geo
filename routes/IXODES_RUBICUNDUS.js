var express = require('express');
var routerIXODES_RUBICUNDUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerIXODES_RUBICUNDUS.get('/', function(req, res) {

    var renderObj = {
        title: "Ixodes rubicundus",
        currMap: "pdf/web/viewer.html?file=species-pages/IXODES_RUBICUNDUS/IXODES RUBICUNDUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/IXODES_RUBICUNDUS/future-maps/future.pdf",
        url: "/IXODES_RUBICUNDUS",
        urlCSV: "pdf/web/species-pages/IXODES_RUBICUNDUS/IXODES RUBICUNDUS pearldata.csv"
    };
    res.render('IXODES_RUBICUNDUS', renderObj);
});

// Grab data from document
routerIXODES_RUBICUNDUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerIXODES_RUBICUNDUS;
