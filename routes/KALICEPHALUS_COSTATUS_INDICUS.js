var express = require('express');
var routerSPECIES_SPECIES = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerSPECIES_SPECIES.get('/', function(req, res) {

    var renderObj = {
        title: "Species species",
        currMap: "pdf/web/viewer.html?file=species-pages/SPECIES_SPECIES/SPECIES SPECIES current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/SPECIES_SPECIES/future-maps/future.pdf",
        url: "/SPECIES_SPECIES",
        urlCSV: "pdf/web/species-pages/SPECIES_SPECIES/SPECIES SPECIES pearldata.csv"
    };
    res.render('SPECIES_SPECIES', renderObj);
});

// Grab data from document
routerSPECIES_SPECIES.post('/', function(req, res) {

    res.end();
});

module.exports = routerSPECIES_SPECIES;
