var express = require('express');
var routerSYPHACIA_OBVELATA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerSYPHACIA_OBVELATA.get('/', function(req, res) {

    var renderObj = {
        title: "Syphacia obvelata",
        currMap: "pdf/web/viewer.html?file=species-pages/SYPHACIA_OBVELATA/SYPHACIA OBVELATA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/SYPHACIA_OBVELATA/future-maps/future.pdf",
        url: "/SYPHACIA_OBVELATA",
        urlCSV: "pdf/web/species-pages/SYPHACIA_OBVELATA/SYPHACIA OBVELATA pearldata.csv"
    };
    res.render('SYPHACIA_OBVELATA', renderObj);
});

// Grab data from document
routerSYPHACIA_OBVELATA.post('/', function(req, res) {

    res.end();
});

module.exports = routerSYPHACIA_OBVELATA;
