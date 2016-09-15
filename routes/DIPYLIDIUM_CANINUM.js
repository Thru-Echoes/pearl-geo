var express = require('express');
var routerDIPYLIDIUM_CANINUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerDIPYLIDIUM_CANINUM.get('/', function(req, res) {

    var renderObj = {
        title: "Dipylidium caninum",
        currMap: "pdf/web/viewer.html?file=species-pages/DIPYLIDIUM_CANINUM/DIPYLIDIUM CANINUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/DIPYLIDIUM_CANINUM/future-maps/future.pdf",
        url: "/DIPYLIDIUM_CANINUM",
        urlCSV: "pdf/web/species-pages/DIPYLIDIUM_CANINUM/DIPYLIDIUM CANINUM pearldata.csv"
    };
    res.render('DIPYLIDIUM_CANINUM', renderObj);
});

// Grab data from document
routerDIPYLIDIUM_CANINUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerDIPYLIDIUM_CANINUM;
