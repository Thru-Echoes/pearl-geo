var express = require('express');
var routerCHAETODACTYLUS_KROMBEINI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCHAETODACTYLUS_KROMBEINI.get('/', function(req, res) {

    var renderObj = {
        title: "Chaetodactylus krombeini",
        currMap: "pdf/web/viewer.html?file=species-pages/CHAETODACTYLUS_KROMBEINI/CHAETODACTYLUS KROMBEINI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/CHAETODACTYLUS_KROMBEINI/future-maps/future.pdf",
        url: "/CHAETODACTYLUS_KROMBEINI",
        urlCSV: "pdf/web/species-pages/CHAETODACTYLUS_KROMBEINI/CHAETODACTYLUS KROMBEINI pearldata.csv"
    };
    res.render('CHAETODACTYLUS_KROMBEINI', renderObj);
});

// Grab data from document
routerCHAETODACTYLUS_KROMBEINI.post('/', function(req, res) {

    res.end();
});

module.exports = routerCHAETODACTYLUS_KROMBEINI;
