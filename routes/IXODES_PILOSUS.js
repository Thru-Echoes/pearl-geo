var express = require('express');
var routerIXODES_PILOSUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerIXODES_PILOSUS.get('/', function(req, res) {

    var renderObj = {
        title: "Ixodes pilosus",
        currMap: "pdf/web/viewer.html?file=species-pages/IXODES_PILOSUS/IXODES PILOSUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/IXODES_PILOSUS/future-maps/future.pdf",
        url: "/IXODES_PILOSUS",
        urlCSV: "pdf/web/species-pages/IXODES_PILOSUS/IXODES PILOSUS pearldata.csv"
    };
    res.render('IXODES_PILOSUS', renderObj);
});

// Grab data from document
routerIXODES_PILOSUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerIXODES_PILOSUS;
