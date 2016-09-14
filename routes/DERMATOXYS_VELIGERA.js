var express = require('express');
var routerDERMATOXYS_VELIGERA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerDERMATOXYS_VELIGERA.get('/', function(req, res) {

    var renderObj = {
        title: "Dermatoxys veligera",
        currMap: "pdf/web/viewer.html?file=species-pages/DERMATOXYS_VELIGERA/DERMATOXYS VELIGERA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/DERMATOXYS_VELIGERA/future-maps/future.pdf",
        url: "/DERMATOXYS_VELIGERA",
        urlCSV: "pdf/web/species-pages/DERMATOXYS_VELIGERA/DERMATOXYS VELIGERA pearldata.csv"
    };
    res.render('DERMATOXYS_VELIGERA', renderObj);
});

// Grab data from document
routerDERMATOXYS_VELIGERA.post('/', function(req, res) {

    res.end();
});

module.exports = routerDERMATOXYS_VELIGERA;
