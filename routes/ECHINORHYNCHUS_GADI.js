var express = require('express');
var routerECHINORHYNCHUS_GADI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerECHINORHYNCHUS_GADI.get('/', function(req, res) {

    var renderObj = {
        title: "Echinorhynchus gadi",
        currMap: "pdf/web/viewer.html?file=species-pages/ECHINORHYNCHUS_GADI/ECHINORHYNCHUS GADI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/ECHINORHYNCHUS_GADI/future-maps/future.pdf",
        url: "/ECHINORHYNCHUS_GADI",
        urlCSV: "pdf/web/species-pages/ECHINORHYNCHUS_GADI/ECHINORHYNCHUS GADI pearldata.csv"
    };
    res.render('ECHINORHYNCHUS_GADI', renderObj);
});

// Grab data from document
routerECHINORHYNCHUS_GADI.post('/', function(req, res) {

    res.end();
});

module.exports = routerECHINORHYNCHUS_GADI;
