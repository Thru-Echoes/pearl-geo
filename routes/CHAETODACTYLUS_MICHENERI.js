var express = require('express');
var routerCHAETODACTYLUS_MICHENERI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCHAETODACTYLUS_MICHENERI.get('/', function(req, res) {

    var renderObj = {
        title: "Chaetodactylus micheneri",
        currMap: "pdf/web/viewer.html?file=species-pages/CHAETODACTYLUS_MICHENERI/CHAETODACTYLUS MICHENERI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/CHAETODACTYLUS_MICHENERI/future-maps/future.pdf",
        url: "/CHAETODACTYLUS_MICHENERI",
        urlCSV: "pdf/web/species-pages/CHAETODACTYLUS_MICHENERI/CHAETODACTYLUS MICHENERI pearldata.csv"
    };
    res.render('CHAETODACTYLUS_MICHENERI', renderObj);
});

// Grab data from document
routerCHAETODACTYLUS_MICHENERI.post('/', function(req, res) {

    res.end();
});

module.exports = routerCHAETODACTYLUS_MICHENERI;
