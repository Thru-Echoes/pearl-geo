var express = require('express');
var routerMONIEZIA_BENEDENI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerMONIEZIA_BENEDENI.get('/', function(req, res) {

    var renderObj = {
        title: "Moniezia benedeni",
        currMap: "pdf/web/viewer.html?file=species-pages/MONIEZIA_BENEDENI/MONIEZIA BENEDENI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/MONIEZIA_BENEDENI/future-maps/future.pdf",
        url: "/MONIEZIA_BENEDENI",
        urlCSV: "pdf/web/species-pages/MONIEZIA_BENEDENI/MONIEZIA BENEDENI pearldata.csv"
    };
    res.render('MONIEZIA_BENEDENI', renderObj);
});

// Grab data from document
routerMONIEZIA_BENEDENI.post('/', function(req, res) {

    res.end();
});

module.exports = routerMONIEZIA_BENEDENI;
