var express = require('express');
var routerPLAGIORCHIS_VESPERTILIONIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerPLAGIORCHIS_VESPERTILIONIS.get('/', function(req, res) {

    var renderObj = {
        title: "Plagiorchis vespertilionis",
        currMap: "pdf/web/viewer.html?file=species-pages/PLAGIORCHIS_VESPERTILIONIS/PLAGIORCHIS VESPERTILIONIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/PLAGIORCHIS_VESPERTILIONIS/future-maps/future.pdf",
        url: "/PLAGIORCHIS_VESPERTILIONIS",
        urlCSV: "pdf/web/species-pages/PLAGIORCHIS_VESPERTILIONIS/PLAGIORCHIS VESPERTILIONIS pearldata.csv"
    };
    res.render('PLAGIORCHIS_VESPERTILIONIS', renderObj);
});

// Grab data from document
routerPLAGIORCHIS_VESPERTILIONIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerPLAGIORCHIS_VESPERTILIONIS;
