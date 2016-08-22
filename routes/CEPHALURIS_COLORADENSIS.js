var express = require('express');
var routerCEPHALURIS_COLORADENSIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCEPHALURIS_COLORADENSIS.get('/', function(req, res) {

    var renderObj = {
        title: "Cephaluris coloradensis",
        currMap: "pdf/web/viewer.html?file=species-pages/CEPHALURIS_COLORADENSIS/CEPHALURIS COLORADENSIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/CEPHALURIS_COLORADENSIS/future-maps/future.pdf",
        url: "/CEPHALURIS_COLORADENSIS",
        urlCSV: "pdf/web/species-pages/CEPHALURIS_COLORADENSIS/CEPHALURIS COLORADENSIS pearldata.csv"
    };
    res.render('CEPHALURIS_COLORADENSIS', renderObj);
});

// Grab data from document
routerCEPHALURIS_COLORADENSIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerCEPHALURIS_COLORADENSIS;
