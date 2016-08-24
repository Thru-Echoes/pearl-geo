var express = require('express');
var routerCLARKUS_PAPILLATUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCLARKUS_PAPILLATUS.get('/', function(req, res) {

    var renderObj = {
        title: "Clarkus papillatus",
        currMap: "pdf/web/viewer.html?file=species-pages/CLARKUS_PAPILLATUS/CLARKUS PAPILLATUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/CLARKUS_PAPILLATUS/future-maps/future.pdf",
        url: "/CLARKUS_PAPILLATUS",
        urlCSV: "pdf/web/species-pages/CLARKUS_PAPILLATUS/CLARKUS PAPILLATUS pearldata.csv"
    };
    res.render('CLARKUS_PAPILLATUS', renderObj);
});

// Grab data from document
routerCLARKUS_PAPILLATUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerCLARKUS_PAPILLATUS;
