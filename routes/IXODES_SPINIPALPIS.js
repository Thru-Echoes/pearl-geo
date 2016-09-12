var express = require('express');
var routerIXODES_SPINIPALPIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerIXODES_SPINIPALPIS.get('/', function(req, res) {

    var renderObj = {
        title: "Ixodes spinipalpis",
        currMap: "pdf/web/viewer.html?file=species-pages/IXODES_SPINIPALPIS/IXODES SPINIPALPIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/IXODES_SPINIPALPIS/future-maps/future.pdf",
        url: "/IXODES_SPINIPALPIS",
        urlCSV: "pdf/web/species-pages/IXODES_SPINIPALPIS/IXODES SPINIPALPIS pearldata.csv"
    };
    res.render('IXODES_SPINIPALPIS', renderObj);
});

// Grab data from document
routerIXODES_SPINIPALPIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerIXODES_SPINIPALPIS;
