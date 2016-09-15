var express = require('express');
var routerPHYSALOPTERA_PRAEPUTIALIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerPHYSALOPTERA_PRAEPUTIALIS.get('/', function(req, res) {

    var renderObj = {
        title: "Physaloptera praeputialis",
        currMap: "pdf/web/viewer.html?file=species-pages/PHYSALOPTERA_PRAEPUTIALIS/PHYSALOPTERA PRAEPUTIALIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/PHYSALOPTERA_PRAEPUTIALIS/future-maps/future.pdf",
        url: "/PHYSALOPTERA_PRAEPUTIALIS",
        urlCSV: "pdf/web/species-pages/PHYSALOPTERA_PRAEPUTIALIS/PHYSALOPTERA PRAEPUTIALIS pearldata.csv"
    };
    res.render('PHYSALOPTERA_PRAEPUTIALIS', renderObj);
});

// Grab data from document
routerPHYSALOPTERA_PRAEPUTIALIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerPHYSALOPTERA_PRAEPUTIALIS;
