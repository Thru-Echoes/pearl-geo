var express = require('express');
var routerRHABDIAS_RANAE = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHABDIAS_RANAE.get('/', function(req, res) {

    var renderObj = {
        title: "Rhabdias ranae",
        currMap: "pdf/web/viewer.html?file=species-pages/RHABDIAS_RANAE/RHABDIAS RANAE current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHABDIAS_RANAE/future-maps/future.pdf",
        url: "/RHABDIAS_RANAE",
        urlCSV: "pdf/web/species-pages/RHABDIAS_RANAE/RHABDIAS RANAE pearldata.csv"
    };
    res.render('RHABDIAS_RANAE', renderObj);
});

// Grab data from document
routerRHABDIAS_RANAE.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHABDIAS_RANAE;
