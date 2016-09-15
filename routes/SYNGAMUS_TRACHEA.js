var express = require('express');
var routerSYNGAMUS_TRACHEA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerSYNGAMUS_TRACHEA.get('/', function(req, res) {

    var renderObj = {
        title: "Syngamus trachea",
        currMap: "pdf/web/viewer.html?file=species-pages/SYNGAMUS_TRACHEA/SYNGAMUS TRACHEA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/SYNGAMUS_TRACHEA/future-maps/future.pdf",
        url: "/SYNGAMUS_TRACHEA",
        urlCSV: "pdf/web/species-pages/SYNGAMUS_TRACHEA/SYNGAMUS TRACHEA pearldata.csv"
    };
    res.render('SYNGAMUS_TRACHEA', renderObj);
});

// Grab data from document
routerSYNGAMUS_TRACHEA.post('/', function(req, res) {

    res.end();
});

module.exports = routerSYNGAMUS_TRACHEA;
