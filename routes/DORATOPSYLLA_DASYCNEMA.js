var express = require('express');
var routerDORATOPSYLLA_DASYCNEMA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerDORATOPSYLLA_DASYCNEMA.get('/', function(req, res) {

    var renderObj = {
        title: "Doratopsylla dasycnema",
        currMap: "pdf/web/viewer.html?file=species-pages/DORATOPSYLLA_DASYCNEMA/DORATOPSYLLA DASYCNEMA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/DORATOPSYLLA_DASYCNEMA/future-maps/future.pdf",
        url: "/DORATOPSYLLA_DASYCNEMA",
        urlCSV: "pdf/web/species-pages/DORATOPSYLLA_DASYCNEMA/DORATOPSYLLA DASYCNEMA pearldata.csv"
    };
    res.render('DORATOPSYLLA_DASYCNEMA', renderObj);
});

// Grab data from document
routerDORATOPSYLLA_DASYCNEMA.post('/', function(req, res) {

    res.end();
});

module.exports = routerDORATOPSYLLA_DASYCNEMA;
