var express = require('express');
var routerNEMATODIRUS_ABNORMALIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerNEMATODIRUS_ABNORMALIS.get('/', function(req, res) {

    var renderObj = {
        title: "Nematodirus abnormalis",
        currMap: "pdf/web/viewer.html?file=species-pages/NEMATODIRUS_ABNORMALIS/NEMATODIRUS ABNORMALIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/NEMATODIRUS_ABNORMALIS/future-maps/future.pdf",
        url: "/NEMATODIRUS_ABNORMALIS",
        urlCSV: "pdf/web/species-pages/NEMATODIRUS_ABNORMALIS/NEMATODIRUS ABNORMALIS pearldata.csv"
    };
    res.render('NEMATODIRUS_ABNORMALIS', renderObj);
});

// Grab data from document
routerNEMATODIRUS_ABNORMALIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerNEMATODIRUS_ABNORMALIS;
