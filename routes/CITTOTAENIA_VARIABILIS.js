var express = require('express');
var routerCITTOTAENIA_VARIABILIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCITTOTAENIA_VARIABILIS.get('/', function(req, res) {

    var renderObj = {
        title: "Cittotaenia variabilis",
        currMap: "pdf/web/viewer.html?file=species-pages/CITTOTAENIA_VARIABILIS/CITTOTAENIA VARIABILIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/CITTOTAENIA_VARIABILIS/future-maps/future.pdf",
        url: "/CITTOTAENIA_VARIABILIS",
        urlCSV: "pdf/web/species-pages/CITTOTAENIA_VARIABILIS/CITTOTAENIA VARIABILIS pearldata.csv"
    };
    res.render('CITTOTAENIA_VARIABILIS', renderObj);
});

// Grab data from document
routerCITTOTAENIA_VARIABILIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerCITTOTAENIA_VARIABILIS;
