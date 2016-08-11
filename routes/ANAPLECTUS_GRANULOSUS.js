var express = require('express');
var routerANAPLECTUS_GRANULOSUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerANAPLECTUS_GRANULOSUS.get('/', function(req, res) {

    var renderObj = {
        title: "Anaplectus granulosus",
        currMap: "pdf/web/viewer.html?file=species-pages/ANAPLECTUS_GRANULOSUS/ANAPLECTUS GRANULOSUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/ANAPLECTUS_GRANULOSUS/future-maps/future.pdf",
        url: "/ANAPLECTUS_GRANULOSUS",
        urlCSV: "pdf/web/species-pages/ANAPLECTUS_GRANULOSUS/ANAPLECTUS GRANULOSUS pearldata.csv"
    };
    res.render('ANAPLECTUS_GRANULOSUS', renderObj);
});

// Grab data from document
routerANAPLECTUS_GRANULOSUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerANAPLECTUS_GRANULOSUS;
