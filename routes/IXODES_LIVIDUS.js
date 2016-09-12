var express = require('express');
var routerIXODES_LIVIDUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerIXODES_LIVIDUS.get('/', function(req, res) {

    var renderObj = {
        title: "Ixodes lividus",
        currMap: "pdf/web/viewer.html?file=species-pages/IXODES_LIVIDUS/IXODES LIVIDUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/IXODES_LIVIDUS/future-maps/future.pdf",
        url: "/IXODES_LIVIDUS",
        urlCSV: "pdf/web/species-pages/IXODES_LIVIDUS/IXODES LIVIDUS pearldata.csv"
    };
    res.render('IXODES_LIVIDUS', renderObj);
});

// Grab data from document
routerIXODES_LIVIDUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerIXODES_LIVIDUS;
