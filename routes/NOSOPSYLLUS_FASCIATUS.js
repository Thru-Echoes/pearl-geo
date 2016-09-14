var express = require('express');
var routerNOSOPSYLLUS_FASCIATUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerNOSOPSYLLUS_FASCIATUS.get('/', function(req, res) {

    var renderObj = {
        title: "Nosopsyllus fasciatus",
        currMap: "pdf/web/viewer.html?file=species-pages/NOSOPSYLLUS_FASCIATUS/NOSOPSYLLUS FASCIATUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/NOSOPSYLLUS_FASCIATUS/future-maps/future.pdf",
        url: "/NOSOPSYLLUS_FASCIATUS",
        urlCSV: "pdf/web/species-pages/NOSOPSYLLUS_FASCIATUS/NOSOPSYLLUS FASCIATUS pearldata.csv"
    };
    res.render('NOSOPSYLLUS_FASCIATUS', renderObj);
});

// Grab data from document
routerNOSOPSYLLUS_FASCIATUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerNOSOPSYLLUS_FASCIATUS;
