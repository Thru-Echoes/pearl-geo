var express = require('express');
var routerTRICHURIS_OVIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerTRICHURIS_OVIS.get('/', function(req, res) {

    var renderObj = {
        title: "Trichuris ovis",
        currMap: "pdf/web/viewer.html?file=species-pages/TRICHURIS_OVIS/TRICHURIS OVIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/TRICHURIS_OVIS/future-maps/future.pdf",
        url: "/TRICHURIS_OVIS",
        urlCSV: "pdf/web/species-pages/TRICHURIS_OVIS/TRICHURIS OVIS pearldata.csv"
    };
    res.render('TRICHURIS_OVIS', renderObj);
});

// Grab data from document
routerTRICHURIS_OVIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerTRICHURIS_OVIS;
