var express = require('express');
var routerALAIMUS_PRIMITIVUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerALAIMUS_PRIMITIVUS.get('/', function(req, res) {
    var renderObj = {
        title: "Alaimus primitivus",
        clade: "Nematoda",
        source: "GBIF",
        currMap: "pdf/web/viewer.html?file=species-pages/ALAIMUS_PRIMITIVUS/ALAIMUS PRIMITIVUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/ALAIMUS_PRIMITIVUS/future-maps/future.pdf",
        url: "/ALAIMUS_PRIMITIVUS",
        urlCSV: "pdf/web/species-pages/ALAIMUS_PRIMITIVUS/ALAIMUS PRIMITIVUS pearldata.csv"
    };
    res.render('ALAIMUS_PRIMITIVUS', renderObj);
});

// Grab data from document
routerALAIMUS_PRIMITIVUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerALAIMUS_PRIMITIVUS;
