var express = require('express');
var routerNEMATODIRUS_HELVETIANUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerNEMATODIRUS_HELVETIANUS.get('/', function(req, res) {

    var renderObj = {
        title: "Nematodirus helvetianus",
        currMap: "pdf/web/viewer.html?file=species-pages/NEMATODIRUS_HELVETIANUS/NEMATODIRUS HELVETIANUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/NEMATODIRUS_HELVETIANUS/future-maps/future.pdf",
        url: "/NEMATODIRUS_HELVETIANUS",
        urlCSV: "pdf/web/species-pages/NEMATODIRUS_HELVETIANUS/NEMATODIRUS HELVETIANUS pearldata.csv"
    };
    res.render('NEMATODIRUS_HELVETIANUS', renderObj);
});

// Grab data from document
routerNEMATODIRUS_HELVETIANUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerNEMATODIRUS_HELVETIANUS;
