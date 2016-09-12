var express = require('express');
var routerIXODES_HOLOCYCLUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerIXODES_HOLOCYCLUS.get('/', function(req, res) {

    var renderObj = {
        title: "Ixodes holocyclus",
        currMap: "pdf/web/viewer.html?file=species-pages/IXODES_HOLOCYCLUS/IXODES HOLOCYCLUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/IXODES_HOLOCYCLUS/future-maps/future.pdf",
        url: "/IXODES_HOLOCYCLUS",
        urlCSV: "pdf/web/species-pages/IXODES_HOLOCYCLUS/IXODES HOLOCYCLUS pearldata.csv"
    };
    res.render('IXODES_HOLOCYCLUS', renderObj);
});

// Grab data from document
routerIXODES_HOLOCYCLUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerIXODES_HOLOCYCLUS;
