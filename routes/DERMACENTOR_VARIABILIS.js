var express = require('express');
var routerDERMACENTOR_VARIABILIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerDERMACENTOR_VARIABILIS.get('/', function(req, res) {

    var renderObj = {
        title: "Dermacentor variabilis",
        currMap: "pdf/web/viewer.html?file=species-pages/DERMACENTOR_VARIABILIS/DERMACENTOR VARIABILIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/DERMACENTOR_VARIABILIS/future-maps/future.pdf",
        url: "/DERMACENTOR_VARIABILIS",
        urlCSV: "pdf/web/species-pages/DERMACENTOR_VARIABILIS/DERMACENTOR VARIABILIS pearldata.csv"
    };
    res.render('DERMACENTOR_VARIABILIS', renderObj);
});

// Grab data from document
routerDERMACENTOR_VARIABILIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerDERMACENTOR_VARIABILIS;
