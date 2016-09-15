var express = require('express');
var routerPHYSOCEPHALUS_SEXALATUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerPHYSOCEPHALUS_SEXALATUS.get('/', function(req, res) {

    var renderObj = {
        title: "Physocephalus sexalatus",
        currMap: "pdf/web/viewer.html?file=species-pages/PHYSOCEPHALUS_SEXALATUS/PHYSOCEPHALUS SEXALATUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/PHYSOCEPHALUS_SEXALATUS/future-maps/future.pdf",
        url: "/PHYSOCEPHALUS_SEXALATUS",
        urlCSV: "pdf/web/species-pages/PHYSOCEPHALUS_SEXALATUS/PHYSOCEPHALUS SEXALATUS pearldata.csv"
    };
    res.render('PHYSOCEPHALUS_SEXALATUS', renderObj);
});

// Grab data from document
routerPHYSOCEPHALUS_SEXALATUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerPHYSOCEPHALUS_SEXALATUS;
