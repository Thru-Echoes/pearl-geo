var express = require('express');
var routerECHINOSTOMA_COALITUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerECHINOSTOMA_COALITUM.get('/', function(req, res) {

    var renderObj = {
        title: "Echinostoma coalitum",
        currMap: "pdf/web/viewer.html?file=species-pages/ECHINOSTOMA_COALITUM/ECHINOSTOMA COALITUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/ECHINOSTOMA_COALITUM/future-maps/future.pdf",
        url: "/ECHINOSTOMA_COALITUM",
        urlCSV: "pdf/web/species-pages/ECHINOSTOMA_COALITUM/ECHINOSTOMA COALITUM pearldata.csv"
    };
    res.render('ECHINOSTOMA_COALITUM', renderObj);
});

// Grab data from document
routerECHINOSTOMA_COALITUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerECHINOSTOMA_COALITUM;
