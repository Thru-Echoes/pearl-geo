var express = require('express');
var routerSTRONGYLUS_EDENTATUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerSTRONGYLUS_EDENTATUS.get('/', function(req, res) {

    var renderObj = {
        title: "Strongylus edentatus",
        currMap: "pdf/web/viewer.html?file=species-pages/STRONGYLUS_EDENTATUS/STRONGYLUS EDENTATUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/STRONGYLUS_EDENTATUS/future-maps/future.pdf",
        url: "/STRONGYLUS_EDENTATUS",
        urlCSV: "pdf/web/species-pages/STRONGYLUS_EDENTATUS/STRONGYLUS EDENTATUS pearldata.csv"
    };
    res.render('STRONGYLUS_EDENTATUS', renderObj);
});

// Grab data from document
routerSTRONGYLUS_EDENTATUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerSTRONGYLUS_EDENTATUS;
