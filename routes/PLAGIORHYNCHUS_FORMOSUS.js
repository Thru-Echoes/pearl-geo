var express = require('express');
var routerPLAGIORHYNCHUS_FORMOSUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerPLAGIORHYNCHUS_FORMOSUS.get('/', function(req, res) {

    var renderObj = {
        title: "Plagiorhynchus formosus",
        currMap: "pdf/web/viewer.html?file=species-pages/PLAGIORHYNCHUS_FORMOSUS/PLAGIORHYNCHUS FORMOSUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/PLAGIORHYNCHUS_FORMOSUS/future-maps/future.pdf",
        url: "/PLAGIORHYNCHUS_FORMOSUS",
        urlCSV: "pdf/web/species-pages/PLAGIORHYNCHUS_FORMOSUS/PLAGIORHYNCHUS FORMOSUS pearldata.csv"
    };
    res.render('PLAGIORHYNCHUS_FORMOSUS', renderObj);
});

// Grab data from document
routerPLAGIORHYNCHUS_FORMOSUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerPLAGIORHYNCHUS_FORMOSUS;
