var express = require('express');
var routerIXODES_SCULPTUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerIXODES_SCULPTUS.get('/', function(req, res) {

    var renderObj = {
        title: "Ixodes sculptus",
        currMap: "pdf/web/viewer.html?file=species-pages/IXODES_SCULPTUS/IXODES SCULPTUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/IXODES_SCULPTUS/future-maps/future.pdf",
        url: "/IXODES_SCULPTUS",
        urlCSV: "pdf/web/species-pages/IXODES_SCULPTUS/IXODES SCULPTUS pearldata.csv"
    };
    res.render('IXODES_SCULPTUS', renderObj);
});

// Grab data from document
routerIXODES_SCULPTUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerIXODES_SCULPTUS;
