var express = require('express');
var routerRHABDOLAIMUS_TERRESTRIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHABDOLAIMUS_TERRESTRIS.get('/', function(req, res) {

    var renderObj = {
        title: "Rhabdolaimus terrestris",
        currMap: "pdf/web/viewer.html?file=species-pages/RHABDOLAIMUS_TERRESTRIS/RHABDOLAIMUS TERRESTRIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHABDOLAIMUS_TERRESTRIS/future-maps/future.pdf",
        url: "/RHABDOLAIMUS_TERRESTRIS",
        urlCSV: "pdf/web/species-pages/RHABDOLAIMUS_TERRESTRIS/RHABDOLAIMUS TERRESTRIS pearldata.csv"
    };
    res.render('RHABDOLAIMUS_TERRESTRIS', renderObj);
});

// Grab data from document
routerRHABDOLAIMUS_TERRESTRIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHABDOLAIMUS_TERRESTRIS;
