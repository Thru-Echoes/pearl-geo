var express = require('express');
var routerFASCIOLOIDES_MAGNA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerFASCIOLOIDES_MAGNA.get('/', function(req, res) {

    var renderObj = {
        title: "Fascioloides magna",
        currMap: "pdf/web/viewer.html?file=species-pages/FASCIOLOIDES_MAGNA/FASCIOLOIDES MAGNA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/FASCIOLOIDES_MAGNA/future-maps/future.pdf",
        url: "/FASCIOLOIDES_MAGNA",
        urlCSV: "pdf/web/species-pages/FASCIOLOIDES_MAGNA/FASCIOLOIDES MAGNA pearldata.csv"
    };
    res.render('FASCIOLOIDES_MAGNA', renderObj);
});

// Grab data from document
routerFASCIOLOIDES_MAGNA.post('/', function(req, res) {

    res.end();
});

module.exports = routerFASCIOLOIDES_MAGNA;
