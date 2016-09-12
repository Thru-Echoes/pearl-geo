var express = require('express');
var routerIXODES_HEXAGONUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerIXODES_HEXAGONUS.get('/', function(req, res) {

    var renderObj = {
        title: "Ixodes hexagonus",
        currMap: "pdf/web/viewer.html?file=species-pages/IXODES_HEXAGONUS/IXODES HEXAGONUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/IXODES_HEXAGONUS/future-maps/future.pdf",
        url: "/IXODES_HEXAGONUS",
        urlCSV: "pdf/web/species-pages/IXODES_HEXAGONUS/IXODES HEXAGONUS pearldata.csv"
    };
    res.render('IXODES_HEXAGONUS', renderObj);
});

// Grab data from document
routerIXODES_HEXAGONUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerIXODES_HEXAGONUS;
