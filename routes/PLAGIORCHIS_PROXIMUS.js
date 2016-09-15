var express = require('express');
var routerPLAGIORCHIS_PROXIMUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerPLAGIORCHIS_PROXIMUS.get('/', function(req, res) {

    var renderObj = {
        title: "Plagiorchis proximus",
        currMap: "pdf/web/viewer.html?file=species-pages/PLAGIORCHIS_PROXIMUS/PLAGIORCHIS PROXIMUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/PLAGIORCHIS_PROXIMUS/future-maps/future.pdf",
        url: "/PLAGIORCHIS_PROXIMUS",
        urlCSV: "pdf/web/species-pages/PLAGIORCHIS_PROXIMUS/PLAGIORCHIS PROXIMUS pearldata.csv"
    };
    res.render('PLAGIORCHIS_PROXIMUS', renderObj);
});

// Grab data from document
routerPLAGIORCHIS_PROXIMUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerPLAGIORCHIS_PROXIMUS;
