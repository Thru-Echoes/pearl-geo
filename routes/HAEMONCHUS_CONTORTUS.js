var express = require('express');
var routerHAEMONCHUS_CONTORTUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerHAEMONCHUS_CONTORTUS.get('/', function(req, res) {

    var renderObj = {
        title: "Haemonchus contortus",
        currMap: "pdf/web/viewer.html?file=species-pages/HAEMONCHUS_CONTORTUS/HAEMONCHUS CONTORTUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/HAEMONCHUS_CONTORTUS/future-maps/future.pdf",
        url: "/HAEMONCHUS_CONTORTUS",
        urlCSV: "pdf/web/species-pages/HAEMONCHUS_CONTORTUS/HAEMONCHUS CONTORTUS pearldata.csv"
    };
    res.render('HAEMONCHUS_CONTORTUS', renderObj);
});

// Grab data from document
routerHAEMONCHUS_CONTORTUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerHAEMONCHUS_CONTORTUS;
