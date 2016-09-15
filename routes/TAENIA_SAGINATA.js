var express = require('express');
var routerTAENIA_SAGINATA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerTAENIA_SAGINATA.get('/', function(req, res) {

    var renderObj = {
        title: "Taenia saginata",
        currMap: "pdf/web/viewer.html?file=species-pages/TAENIA_SAGINATA/TAENIA SAGINATA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/TAENIA_SAGINATA/future-maps/future.pdf",
        url: "/TAENIA_SAGINATA",
        urlCSV: "pdf/web/species-pages/TAENIA_SAGINATA/TAENIA SAGINATA pearldata.csv"
    };
    res.render('TAENIA_SAGINATA', renderObj);
});

// Grab data from document
routerTAENIA_SAGINATA.post('/', function(req, res) {

    res.end();
});

module.exports = routerTAENIA_SAGINATA;
