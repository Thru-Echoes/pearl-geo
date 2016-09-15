var express = require('express');
var routerPANAGROLAIMUS_RIGIDUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerPANAGROLAIMUS_RIGIDUS.get('/', function(req, res) {

    var renderObj = {
        title: "Panagrolaimus rigidus",
        currMap: "pdf/web/viewer.html?file=species-pages/PANAGROLAIMUS_RIGIDUS/PANAGROLAIMUS RIGIDUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/PANAGROLAIMUS_RIGIDUS/future-maps/future.pdf",
        url: "/PANAGROLAIMUS_RIGIDUS",
        urlCSV: "pdf/web/species-pages/PANAGROLAIMUS_RIGIDUS/PANAGROLAIMUS RIGIDUS pearldata.csv"
    };
    res.render('PANAGROLAIMUS_RIGIDUS', renderObj);
});

// Grab data from document
routerPANAGROLAIMUS_RIGIDUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerPANAGROLAIMUS_RIGIDUS;
