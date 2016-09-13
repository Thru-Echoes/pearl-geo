var express = require('express');
var routerKOHLSIA_PELAEZI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerKOHLSIA_PELAEZI.get('/', function(req, res) {

    var renderObj = {
        title: "Kohlsia pelaezi",
        currMap: "pdf/web/viewer.html?file=species-pages/KOHLSIA_PELAEZI/KOHLSIA PELAEZI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/KOHLSIA_PELAEZI/future-maps/future.pdf",
        url: "/KOHLSIA_PELAEZI",
        urlCSV: "pdf/web/species-pages/KOHLSIA_PELAEZI/KOHLSIA PELAEZI pearldata.csv"
    };
    res.render('KOHLSIA_PELAEZI', renderObj);
});

// Grab data from document
routerKOHLSIA_PELAEZI.post('/', function(req, res) {

    res.end();
});

module.exports = routerKOHLSIA_PELAEZI;
