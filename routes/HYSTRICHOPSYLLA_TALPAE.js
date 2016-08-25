var express = require('express');
var routerHYSTRICHOPSYLLA_TALPAE = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerHYSTRICHOPSYLLA_TALPAE.get('/', function(req, res) {

    var renderObj = {
        title: "Hystrichopsylla talpae",
        currMap: "pdf/web/viewer.html?file=species-pages/HYSTRICHOPSYLLA_TALPAE/HYSTRICHOPSYLLA TALPAE current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/HYSTRICHOPSYLLA_TALPAE/future-maps/future.pdf",
        url: "/HYSTRICHOPSYLLA_TALPAE",
        urlCSV: "pdf/web/species-pages/HYSTRICHOPSYLLA_TALPAE/HYSTRICHOPSYLLA TALPAE pearldata.csv"
    };
    res.render('HYSTRICHOPSYLLA_TALPAE', renderObj);
});

// Grab data from document
routerHYSTRICHOPSYLLA_TALPAE.post('/', function(req, res) {

    res.end();
});

module.exports = routerHYSTRICHOPSYLLA_TALPAE;
