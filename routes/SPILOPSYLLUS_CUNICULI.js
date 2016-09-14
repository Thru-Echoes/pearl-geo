var express = require('express');
var routerSPILOPSYLLUS_CUNICULI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerSPILOPSYLLUS_CUNICULI.get('/', function(req, res) {

    var renderObj = {
        title: "Spilopsyllus cuniculi",
        currMap: "pdf/web/viewer.html?file=species-pages/SPILOPSYLLUS_CUNICULI/SPILOPSYLLUS CUNICULI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/SPILOPSYLLUS_CUNICULI/future-maps/future.pdf",
        url: "/SPILOPSYLLUS_CUNICULI",
        urlCSV: "pdf/web/species-pages/SPILOPSYLLUS_CUNICULI/SPILOPSYLLUS CUNICULI pearldata.csv"
    };
    res.render('SPILOPSYLLUS_CUNICULI', renderObj);
});

// Grab data from document
routerSPILOPSYLLUS_CUNICULI.post('/', function(req, res) {

    res.end();
});

module.exports = routerSPILOPSYLLUS_CUNICULI;
