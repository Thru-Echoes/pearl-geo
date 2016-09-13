var express = require('express');
var routerLEPTORHYNCHOIDES_THECATUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerLEPTORHYNCHOIDES_THECATUS.get('/', function(req, res) {

    var renderObj = {
        title: "Leptorhynchoides thecatus",
        currMap: "pdf/web/viewer.html?file=species-pages/LEPTORHYNCHOIDES_THECATUS/LEPTORHYNCHOIDES THECATUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/LEPTORHYNCHOIDES_THECATUS/future-maps/future.pdf",
        url: "/LEPTORHYNCHOIDES_THECATUS",
        urlCSV: "pdf/web/species-pages/LEPTORHYNCHOIDES_THECATUS/LEPTORHYNCHOIDES THECATUS pearldata.csv"
    };
    res.render('LEPTORHYNCHOIDES_THECATUS', renderObj);
});

// Grab data from document
routerLEPTORHYNCHOIDES_THECATUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerLEPTORHYNCHOIDES_THECATUS;
