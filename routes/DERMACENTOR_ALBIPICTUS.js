var express = require('express');
var routerDERMACENTOR_ALBIPICTUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerDERMACENTOR_ALBIPICTUS.get('/', function(req, res) {

    var renderObj = {
        title: "Dermacentor albipictus",
        currMap: "pdf/web/viewer.html?file=species-pages/DERMACENTOR_ALBIPICTUS/DERMACENTOR ALBIPICTUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/DERMACENTOR_ALBIPICTUS/future-maps/future.pdf",
        url: "/DERMACENTOR_ALBIPICTUS",
        urlCSV: "pdf/web/species-pages/DERMACENTOR_ALBIPICTUS/DERMACENTOR ALBIPICTUS pearldata.csv"
    };
    res.render('DERMACENTOR_ALBIPICTUS', renderObj);
});

// Grab data from document
routerDERMACENTOR_ALBIPICTUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerDERMACENTOR_ALBIPICTUS;
