var express = require('express');
var routerPLECTUS_COMMUNIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerPLECTUS_COMMUNIS.get('/', function(req, res) {

    var renderObj = {
        title: "Plectus communis",
        currMap: "pdf/web/viewer.html?file=species-pages/PLECTUS_COMMUNIS/PLECTUS COMMUNIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/PLECTUS_COMMUNIS/future-maps/future.pdf",
        url: "/PLECTUS_COMMUNIS",
        urlCSV: "pdf/web/species-pages/PLECTUS_COMMUNIS/PLECTUS COMMUNIS pearldata.csv"
    };
    res.render('PLECTUS_COMMUNIS', renderObj);
});

// Grab data from document
routerPLECTUS_COMMUNIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerPLECTUS_COMMUNIS;
