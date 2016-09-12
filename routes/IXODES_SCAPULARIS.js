var express = require('express');
var routerIXODES_SCAPULARIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerIXODES_SCAPULARIS.get('/', function(req, res) {

    var renderObj = {
        title: "Ixodes scapularis",
        currMap: "pdf/web/viewer.html?file=species-pages/IXODES_SCAPULARIS/IXODES SCAPULARIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/IXODES_SCAPULARIS/future-maps/future.pdf",
        url: "/IXODES_SCAPULARIS",
        urlCSV: "pdf/web/species-pages/IXODES_SCAPULARIS/IXODES SCAPULARIS pearldata.csv"
    };
    res.render('IXODES_SCAPULARIS', renderObj);
});

// Grab data from document
routerIXODES_SCAPULARIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerIXODES_SCAPULARIS;
