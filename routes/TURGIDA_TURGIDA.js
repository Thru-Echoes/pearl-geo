var express = require('express');
var routerTURGIDA_TURGIDA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerTURGIDA_TURGIDA.get('/', function(req, res) {

    var renderObj = {
        title: "Turgida turgida",
        currMap: "pdf/web/viewer.html?file=species-pages/TURGIDA_TURGIDA/TURGIDA TURGIDA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/TURGIDA_TURGIDA/future-maps/future.pdf",
        url: "/TURGIDA_TURGIDA",
        urlCSV: "pdf/web/species-pages/TURGIDA_TURGIDA/TURGIDA TURGIDA pearldata.csv"
    };
    res.render('TURGIDA_TURGIDA', renderObj);
});

// Grab data from document
routerTURGIDA_TURGIDA.post('/', function(req, res) {

    res.end();
});

module.exports = routerTURGIDA_TURGIDA;
