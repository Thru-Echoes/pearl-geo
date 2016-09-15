var express = require('express');
var routerOSTERTAGIA_OSTERTAGI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerOSTERTAGIA_OSTERTAGI.get('/', function(req, res) {

    var renderObj = {
        title: "Ostertagia ostertagi",
        currMap: "pdf/web/viewer.html?file=species-pages/OSTERTAGIA_OSTERTAGI/OSTERTAGIA OSTERTAGI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/OSTERTAGIA_OSTERTAGI/future-maps/future.pdf",
        url: "/OSTERTAGIA_OSTERTAGI",
        urlCSV: "pdf/web/species-pages/OSTERTAGIA_OSTERTAGI/OSTERTAGIA OSTERTAGI pearldata.csv"
    };
    res.render('OSTERTAGIA_OSTERTAGI', renderObj);
});

// Grab data from document
routerOSTERTAGIA_OSTERTAGI.post('/', function(req, res) {

    res.end();
});

module.exports = routerOSTERTAGIA_OSTERTAGI;
