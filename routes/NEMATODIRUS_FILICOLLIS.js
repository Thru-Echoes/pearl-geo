var express = require('express');
var routerNEMATODIRUS_FILICOLLIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerNEMATODIRUS_FILICOLLIS.get('/', function(req, res) {

    var renderObj = {
        title: "Nematodirus filicollis",
        currMap: "pdf/web/viewer.html?file=species-pages/NEMATODIRUS_FILICOLLIS/NEMATODIRUS FILICOLLIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/NEMATODIRUS_FILICOLLIS/future-maps/future.pdf",
        url: "/NEMATODIRUS_FILICOLLIS",
        urlCSV: "pdf/web/species-pages/NEMATODIRUS_FILICOLLIS/NEMATODIRUS FILICOLLIS pearldata.csv"
    };
    res.render('NEMATODIRUS_FILICOLLIS', renderObj);
});

// Grab data from document
routerNEMATODIRUS_FILICOLLIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerNEMATODIRUS_FILICOLLIS;
