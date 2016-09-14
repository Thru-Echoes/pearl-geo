var express = require('express');
var routerTAENIA_TAENIAEFORMIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerTAENIA_TAENIAEFORMIS.get('/', function(req, res) {

    var renderObj = {
        title: "Taenia taeniaeformis",
        currMap: "pdf/web/viewer.html?file=species-pages/TAENIA_TAENIAEFORMIS/TAENIA TAENIAEFORMIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/TAENIA_TAENIAEFORMIS/future-maps/future.pdf",
        url: "/TAENIA_TAENIAEFORMIS",
        urlCSV: "pdf/web/species-pages/TAENIA_TAENIAEFORMIS/TAENIA TAENIAEFORMIS pearldata.csv"
    };
    res.render('TAENIA_TAENIAEFORMIS', renderObj);
});

// Grab data from document
routerTAENIA_TAENIAEFORMIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerTAENIA_TAENIAEFORMIS;
