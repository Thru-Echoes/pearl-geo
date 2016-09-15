var express = require('express');
var routerHELICOTYLENCHUS_DIHYSTERA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerHELICOTYLENCHUS_DIHYSTERA.get('/', function(req, res) {

    var renderObj = {
        title: "Helicotylenchus dihystera",
        currMap: "pdf/web/viewer.html?file=species-pages/HELICOTYLENCHUS_DIHYSTERA/HELICOTYLENCHUS DIHYSTERA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/HELICOTYLENCHUS_DIHYSTERA/future-maps/future.pdf",
        url: "/HELICOTYLENCHUS_DIHYSTERA",
        urlCSV: "pdf/web/species-pages/HELICOTYLENCHUS_DIHYSTERA/HELICOTYLENCHUS DIHYSTERA pearldata.csv"
    };
    res.render('HELICOTYLENCHUS_DIHYSTERA', renderObj);
});

// Grab data from document
routerHELICOTYLENCHUS_DIHYSTERA.post('/', function(req, res) {

    res.end();
});

module.exports = routerHELICOTYLENCHUS_DIHYSTERA;
