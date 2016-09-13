var express = require('express');
var routerPLECTUS_CIRRATUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerPLECTUS_CIRRATUS.get('/', function(req, res) {

    var renderObj = {
        title: "Plectus cirratus",
        currMap: "pdf/web/viewer.html?file=species-pages/PLECTUS_CIRRATUS/PLECTUS CIRRATUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/PLECTUS_CIRRATUS/future-maps/future.pdf",
        url: "/PLECTUS_CIRRATUS",
        urlCSV: "pdf/web/species-pages/PLECTUS_CIRRATUS/PLECTUS CIRRATUS pearldata.csv"
    };
    res.render('PLECTUS_CIRRATUS', renderObj);
});

// Grab data from document
routerPLECTUS_CIRRATUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerPLECTUS_CIRRATUS;
