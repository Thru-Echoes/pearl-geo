var express = require('express');
var routerPEROMYSCOPSYLLA_FALLAX = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerPEROMYSCOPSYLLA_FALLAX.get('/', function(req, res) {

    var renderObj = {
        title: "Peromyscopsylla fallax",
        currMap: "pdf/web/viewer.html?file=species-pages/PEROMYSCOPSYLLA_FALLAX/PEROMYSCOPSYLLA FALLAX current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/PEROMYSCOPSYLLA_FALLAX/future-maps/future.pdf",
        url: "/PEROMYSCOPSYLLA_FALLAX",
        urlCSV: "pdf/web/species-pages/PEROMYSCOPSYLLA_FALLAX/PEROMYSCOPSYLLA FALLAX pearldata.csv"
    };
    res.render('PEROMYSCOPSYLLA_FALLAX', renderObj);
});

// Grab data from document
routerPEROMYSCOPSYLLA_FALLAX.post('/', function(req, res) {

    res.end();
});

module.exports = routerPEROMYSCOPSYLLA_FALLAX;
