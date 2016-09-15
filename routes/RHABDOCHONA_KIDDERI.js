var express = require('express');
var routerRHABDOCHONA_KIDDERI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHABDOCHONA_KIDDERI.get('/', function(req, res) {

    var renderObj = {
        title: "Rhabdochona kidderi",
        currMap: "pdf/web/viewer.html?file=species-pages/RHABDOCHONA_KIDDERI/RHABDOCHONA KIDDERI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHABDOCHONA_KIDDERI/future-maps/future.pdf",
        url: "/RHABDOCHONA_KIDDERI",
        urlCSV: "pdf/web/species-pages/RHABDOCHONA_KIDDERI/RHABDOCHONA KIDDERI pearldata.csv"
    };
    res.render('RHABDOCHONA_KIDDERI', renderObj);
});

// Grab data from document
routerRHABDOCHONA_KIDDERI.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHABDOCHONA_KIDDERI;
