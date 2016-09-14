var express = require('express');
var routerNEMATODIRUS_SPATHIGER = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerNEMATODIRUS_SPATHIGER.get('/', function(req, res) {

    var renderObj = {
        title: "Nematodirus spathiger",
        currMap: "pdf/web/viewer.html?file=species-pages/NEMATODIRUS_SPATHIGER/NEMATODIRUS SPATHIGER current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/NEMATODIRUS_SPATHIGER/future-maps/future.pdf",
        url: "/NEMATODIRUS_SPATHIGER",
        urlCSV: "pdf/web/species-pages/NEMATODIRUS_SPATHIGER/NEMATODIRUS SPATHIGER pearldata.csv"
    };
    res.render('NEMATODIRUS_SPATHIGER', renderObj);
});

// Grab data from document
routerNEMATODIRUS_SPATHIGER.post('/', function(req, res) {

    res.end();
});

module.exports = routerNEMATODIRUS_SPATHIGER;
