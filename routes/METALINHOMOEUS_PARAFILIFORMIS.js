var express = require('express');
var routerMETALINHOMOEUS_PARAFILIFORMIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerMETALINHOMOEUS_PARAFILIFORMIS.get('/', function(req, res) {

    var renderObj = {
        title: "Metalinhomoeus parafiliformis",
        currMap: "pdf/web/viewer.html?file=species-pages/METALINHOMOEUS_PARAFILIFORMIS/METALINHOMOEUS PARAFILIFORMIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/METALINHOMOEUS_PARAFILIFORMIS/future-maps/future.pdf",
        url: "/METALINHOMOEUS_PARAFILIFORMIS",
        urlCSV: "pdf/web/species-pages/METALINHOMOEUS_PARAFILIFORMIS/METALINHOMOEUS PARAFILIFORMIS pearldata.csv"
    };
    res.render('METALINHOMOEUS_PARAFILIFORMIS', renderObj);
});

// Grab data from document
routerMETALINHOMOEUS_PARAFILIFORMIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerMETALINHOMOEUS_PARAFILIFORMIS;
