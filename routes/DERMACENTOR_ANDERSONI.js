var express = require('express');
var routerDERMACENTOR_ANDERSONI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerDERMACENTOR_ANDERSONI.get('/', function(req, res) {

    var renderObj = {
        title: "Dermacentor andersoni",
        currMap: "pdf/web/viewer.html?file=species-pages/DERMACENTOR_ANDERSONI/DERMACENTOR ANDERSONI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/DERMACENTOR_ANDERSONI/future-maps/future.pdf",
        url: "/DERMACENTOR_ANDERSONI",
        urlCSV: "pdf/web/species-pages/DERMACENTOR_ANDERSONI/DERMACENTOR ANDERSONI pearldata.csv"
    };
    res.render('DERMACENTOR_ANDERSONI', renderObj);
});

// Grab data from document
routerDERMACENTOR_ANDERSONI.post('/', function(req, res) {

    res.end();
});

module.exports = routerDERMACENTOR_ANDERSONI;
