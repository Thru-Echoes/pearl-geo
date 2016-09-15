var express = require('express');
var routerECHIDNOPHAGA_GALLINACEA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerECHIDNOPHAGA_GALLINACEA.get('/', function(req, res) {

    var renderObj = {
        title: "Echidnophaga gallinacea",
        currMap: "pdf/web/viewer.html?file=species-pages/ECHIDNOPHAGA_GALLINACEA/ECHIDNOPHAGA GALLINACEA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/ECHIDNOPHAGA_GALLINACEA/future-maps/future.pdf",
        url: "/ECHIDNOPHAGA_GALLINACEA",
        urlCSV: "pdf/web/species-pages/ECHIDNOPHAGA_GALLINACEA/ECHIDNOPHAGA GALLINACEA pearldata.csv"
    };
    res.render('ECHIDNOPHAGA_GALLINACEA', renderObj);
});

// Grab data from document
routerECHIDNOPHAGA_GALLINACEA.post('/', function(req, res) {

    res.end();
});

module.exports = routerECHIDNOPHAGA_GALLINACEA;
