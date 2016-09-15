var express = require('express');
var routerEUPARYPHIUM_INERME = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerEUPARYPHIUM_INERME.get('/', function(req, res) {

    var renderObj = {
        title: "Euparyphium inerme",
        currMap: "pdf/web/viewer.html?file=species-pages/EUPARYPHIUM_INERME/EUPARYPHIUM INERME current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/EUPARYPHIUM_INERME/future-maps/future.pdf",
        url: "/EUPARYPHIUM_INERME",
        urlCSV: "pdf/web/species-pages/EUPARYPHIUM_INERME/EUPARYPHIUM INERME pearldata.csv"
    };
    res.render('EUPARYPHIUM_INERME', renderObj);
});

// Grab data from document
routerEUPARYPHIUM_INERME.post('/', function(req, res) {

    res.end();
});

module.exports = routerEUPARYPHIUM_INERME;
