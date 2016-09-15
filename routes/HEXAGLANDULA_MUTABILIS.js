var express = require('express');
var routerHEXAGLANDULA_MUTABILIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerHEXAGLANDULA_MUTABILIS.get('/', function(req, res) {

    var renderObj = {
        title: "Hexaglandula mutabilis",
        currMap: "pdf/web/viewer.html?file=species-pages/HEXAGLANDULA_MUTABILIS/HEXAGLANDULA MUTABILIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/HEXAGLANDULA_MUTABILIS/future-maps/future.pdf",
        url: "/HEXAGLANDULA_MUTABILIS",
        urlCSV: "pdf/web/species-pages/HEXAGLANDULA_MUTABILIS/HEXAGLANDULA MUTABILIS pearldata.csv"
    };
    res.render('HEXAGLANDULA_MUTABILIS', renderObj);
});

// Grab data from document
routerHEXAGLANDULA_MUTABILIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerHEXAGLANDULA_MUTABILIS;
