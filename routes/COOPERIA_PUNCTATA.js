var express = require('express');
var routerCOOPERIA_PUNCTATA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCOOPERIA_PUNCTATA.get('/', function(req, res) {

    var renderObj = {
        title: "Cooperia punctata",
        currMap: "pdf/web/viewer.html?file=species-pages/COOPERIA_PUNCTATA/COOPERIA PUNCTATA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/COOPERIA_PUNCTATA/future-maps/future.pdf",
        url: "/COOPERIA_PUNCTATA",
        urlCSV: "pdf/web/species-pages/COOPERIA_PUNCTATA/COOPERIA PUNCTATA pearldata.csv"
    };
    res.render('COOPERIA_PUNCTATA', renderObj);
});

// Grab data from document
routerCOOPERIA_PUNCTATA.post('/', function(req, res) {

    res.end();
});

module.exports = routerCOOPERIA_PUNCTATA;
