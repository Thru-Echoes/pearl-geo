var express = require('express');
var routerHAEMAPHYSALIS_LEPORISPALUSTRIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerHAEMAPHYSALIS_LEPORISPALUSTRIS.get('/', function(req, res) {

    var renderObj = {
        title: "Haemaphysalis leporispalustris",
        currMap: "pdf/web/viewer.html?file=species-pages/HAEMAPHYSALIS_LEPORISPALUSTRIS/HAEMAPHYSALIS LEPORISPALUSTRIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/HAEMAPHYSALIS_LEPORISPALUSTRIS/future-maps/future.pdf",
        url: "/HAEMAPHYSALIS_LEPORISPALUSTRIS",
        urlCSV: "pdf/web/species-pages/HAEMAPHYSALIS_LEPORISPALUSTRIS/HAEMAPHYSALIS LEPORISPALUSTRIS pearldata.csv"
    };
    res.render('HAEMAPHYSALIS_LEPORISPALUSTRIS', renderObj);
});

// Grab data from document
routerHAEMAPHYSALIS_LEPORISPALUSTRIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerHAEMAPHYSALIS_LEPORISPALUSTRIS;
