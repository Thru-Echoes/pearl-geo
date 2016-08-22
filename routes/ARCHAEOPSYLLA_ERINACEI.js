var express = require('express');
var routerARCHAEOPSYLLA_ERINACEI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerARCHAEOPSYLLA_ERINACEI.get('/', function(req, res) {

    var renderObj = {
        title: "Archaeopsylla erinacei",
        currMap: "pdf/web/viewer.html?file=species-pages/ARCHAEOPSYLLA_ERINACEI/ARCHAEOPSYLLA ERINACEI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/ARCHAEOPSYLLA_ERINACEI/future-maps/future.pdf",
        url: "/ARCHAEOPSYLLA_ERINACEI",
        urlCSV: "pdf/web/species-pages/ARCHAEOPSYLLA_ERINACEI/ARCHAEOPSYLLA ERINACEI pearldata.csv"
    };
    res.render('ARCHAEOPSYLLA_ERINACEI', renderObj);
});

// Grab data from document
routerARCHAEOPSYLLA_ERINACEI.post('/', function(req, res) {

    res.end();
});

module.exports = routerARCHAEOPSYLLA_ERINACEI;
