var express = require('express');
var routerIXODES_TRIANGULICEPS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerIXODES_TRIANGULICEPS.get('/', function(req, res) {

    var renderObj = {
        title: "Ixodes trianguliceps",
        currMap: "pdf/web/viewer.html?file=species-pages/IXODES_TRIANGULICEPS/IXODES TRIANGULICEPS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/IXODES_TRIANGULICEPS/future-maps/future.pdf",
        url: "/IXODES_TRIANGULICEPS",
        urlCSV: "pdf/web/species-pages/IXODES_TRIANGULICEPS/IXODES TRIANGULICEPS pearldata.csv"
    };
    res.render('IXODES_TRIANGULICEPS', renderObj);
});

// Grab data from document
routerIXODES_TRIANGULICEPS.post('/', function(req, res) {

    res.end();
});

module.exports = routerIXODES_TRIANGULICEPS;
