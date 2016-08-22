var express = require('express');
var routerANCYLOSTOMA_CANINUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerANCYLOSTOMA_CANINUM.get('/', function(req, res) {

    var renderObj = {
        title: "Ancylostoma caninum",
        currMap: "pdf/web/viewer.html?file=species-pages/ANCYLOSTOMA_CANINUM/ANCYLOSTOMA CANINUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/ANCYLOSTOMA_CANINUM/future-maps/future.pdf",
        url: "/ANCYLOSTOMA_CANINUM",
        urlCSV: "pdf/web/species-pages/ANCYLOSTOMA_CANINUM/ANCYLOSTOMA CANINUM pearldata.csv"
    };
    res.render('ANCYLOSTOMA_CANINUM', renderObj);
});

// Grab data from document
routerANCYLOSTOMA_CANINUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerANCYLOSTOMA_CANINUM;
