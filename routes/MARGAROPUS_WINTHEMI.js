var express = require('express');
var routerMARGAROPUS_WINTHEMI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerMARGAROPUS_WINTHEMI.get('/', function(req, res) {

    var renderObj = {
        title: "Margaropus winthemi",
        currMap: "pdf/web/viewer.html?file=species-pages/MARGAROPUS_WINTHEMI/MARGAROPUS WINTHEMI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/MARGAROPUS_WINTHEMI/future-maps/future.pdf",
        url: "/MARGAROPUS_WINTHEMI",
        urlCSV: "pdf/web/species-pages/MARGAROPUS_WINTHEMI/MARGAROPUS WINTHEMI pearldata.csv"
    };
    res.render('MARGAROPUS_WINTHEMI', renderObj);
});

// Grab data from document
routerMARGAROPUS_WINTHEMI.post('/', function(req, res) {

    res.end();
});

module.exports = routerMARGAROPUS_WINTHEMI;
