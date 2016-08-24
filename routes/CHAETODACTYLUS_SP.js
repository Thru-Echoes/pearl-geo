var express = require('express');
var routerCHAETODACTYLUS_SP = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCHAETODACTYLUS_SP.get('/', function(req, res) {

    var renderObj = {
        title: "Chaetodactylus sp",
        currMap: "pdf/web/viewer.html?file=species-pages/CHAETODACTYLUS_SP/CHAETODACTYLUS SP current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/CHAETODACTYLUS_SP/future-maps/future.pdf",
        url: "/CHAETODACTYLUS_SP",
        urlCSV: "pdf/web/species-pages/CHAETODACTYLUS_SP/CHAETODACTYLUS SP pearldata.csv"
    };
    res.render('CHAETODACTYLUS_SP', renderObj);
});

// Grab data from document
routerCHAETODACTYLUS_SP.post('/', function(req, res) {

    res.end();
});

module.exports = routerCHAETODACTYLUS_SP;
