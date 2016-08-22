var express = require('express');
var routerBOTHRIOCEPHALUS_CUSPIDATUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerBOTHRIOCEPHALUS_CUSPIDATUS.get('/', function(req, res) {

    var renderObj = {
        title: "Bothriocephalus cuspidatus",
        currMap: "pdf/web/viewer.html?file=species-pages/BOTHRIOCEPHALUS_CUSPIDATUS/BOTHRIOCEPHALUS CUSPIDATUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/BOTHRIOCEPHALUS_CUSPIDATUS/future-maps/future.pdf",
        url: "/BOTHRIOCEPHALUS_CUSPIDATUS",
        urlCSV: "pdf/web/species-pages/BOTHRIOCEPHALUS_CUSPIDATUS/BOTHRIOCEPHALUS CUSPIDATUS pearldata.csv"
    };
    res.render('BOTHRIOCEPHALUS_CUSPIDATUS', renderObj);
});

// Grab data from document
routerBOTHRIOCEPHALUS_CUSPIDATUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerBOTHRIOCEPHALUS_CUSPIDATUS;
