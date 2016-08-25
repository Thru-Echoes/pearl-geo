var express = require('express');
var routerHYSTRICHOPSYLLA_ORIENTALIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerHYSTRICHOPSYLLA_ORIENTALIS.get('/', function(req, res) {

    var renderObj = {
        title: "Hystrichopsylla orientalis",
        currMap: "pdf/web/viewer.html?file=species-pages/HYSTRICHOPSYLLA_ORIENTALIS/HYSTRICHOPSYLLA ORIENTALIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/HYSTRICHOPSYLLA_ORIENTALIS/future-maps/future.pdf",
        url: "/HYSTRICHOPSYLLA_ORIENTALIS",
        urlCSV: "pdf/web/species-pages/HYSTRICHOPSYLLA_ORIENTALIS/HYSTRICHOPSYLLA ORIENTALIS pearldata.csv"
    };
    res.render('HYSTRICHOPSYLLA_ORIENTALIS', renderObj);
});

// Grab data from document
routerHYSTRICHOPSYLLA_ORIENTALIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerHYSTRICHOPSYLLA_ORIENTALIS;
