var express = require('express');
var routerNIPPOSTRONGYLUS_BRASILIENSIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerNIPPOSTRONGYLUS_BRASILIENSIS.get('/', function(req, res) {

    var renderObj = {
        title: "Nippostrongylus brasiliensis",
        currMap: "pdf/web/viewer.html?file=species-pages/NIPPOSTRONGYLUS_BRASILIENSIS/NIPPOSTRONGYLUS BRASILIENSIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/NIPPOSTRONGYLUS_BRASILIENSIS/future-maps/future.pdf",
        url: "/NIPPOSTRONGYLUS_BRASILIENSIS",
        urlCSV: "pdf/web/species-pages/NIPPOSTRONGYLUS_BRASILIENSIS/NIPPOSTRONGYLUS BRASILIENSIS pearldata.csv"
    };
    res.render('NIPPOSTRONGYLUS_BRASILIENSIS', renderObj);
});

// Grab data from document
routerNIPPOSTRONGYLUS_BRASILIENSIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerNIPPOSTRONGYLUS_BRASILIENSIS;
