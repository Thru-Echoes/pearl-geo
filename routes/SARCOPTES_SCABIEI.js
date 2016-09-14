var express = require('express');
var routerSARCOPTES_SCABIEI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerSARCOPTES_SCABIEI.get('/', function(req, res) {

    var renderObj = {
        title: "Sarcoptes scabiei",
        currMap: "pdf/web/viewer.html?file=species-pages/SARCOPTES_SCABIEI/SARCOPTES SCABIEI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/SARCOPTES_SCABIEI/future-maps/future.pdf",
        url: "/SARCOPTES_SCABIEI",
        urlCSV: "pdf/web/species-pages/SARCOPTES_SCABIEI/SARCOPTES SCABIEI pearldata.csv"
    };
    res.render('SARCOPTES_SCABIEI', renderObj);
});

// Grab data from document
routerSARCOPTES_SCABIEI.post('/', function(req, res) {

    res.end();
});

module.exports = routerSARCOPTES_SCABIEI;
