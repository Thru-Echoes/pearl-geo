var express = require('express');
var routerECHINOCOCCUS_GRANULOSUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerECHINOCOCCUS_GRANULOSUS.get('/', function(req, res) {

    var renderObj = {
        title: "Echinococcus granulosus",
        currMap: "pdf/web/viewer.html?file=species-pages/ECHINOCOCCUS_GRANULOSUS/ECHINOCOCCUS GRANULOSUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/ECHINOCOCCUS_GRANULOSUS/future-maps/future.pdf",
        url: "/ECHINOCOCCUS_GRANULOSUS",
        urlCSV: "pdf/web/species-pages/ECHINOCOCCUS_GRANULOSUS/ECHINOCOCCUS GRANULOSUS pearldata.csv"
    };
    res.render('ECHINOCOCCUS_GRANULOSUS', renderObj);
});

// Grab data from document
routerECHINOCOCCUS_GRANULOSUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerECHINOCOCCUS_GRANULOSUS;
