var express = require('express');
var routerOTOBIUS_MEGNINI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerOTOBIUS_MEGNINI.get('/', function(req, res) {

    var renderObj = {
        title: "Otobius megnini",
        currMap: "pdf/web/viewer.html?file=species-pages/OTOBIUS_MEGNINI/OTOBIUS MEGNINI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/OTOBIUS_MEGNINI/future-maps/future.pdf",
        url: "/OTOBIUS_MEGNINI",
        urlCSV: "pdf/web/species-pages/OTOBIUS_MEGNINI/OTOBIUS MEGNINI pearldata.csv"
    };
    res.render('OTOBIUS_MEGNINI', renderObj);
});

// Grab data from document
routerOTOBIUS_MEGNINI.post('/', function(req, res) {

    res.end();
});

module.exports = routerOTOBIUS_MEGNINI;
