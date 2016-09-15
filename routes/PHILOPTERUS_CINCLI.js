var express = require('express');
var routerPHILOPTERUS_CINCLI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerPHILOPTERUS_CINCLI.get('/', function(req, res) {

    var renderObj = {
        title: "Philopterus cincli",
        currMap: "pdf/web/viewer.html?file=species-pages/PHILOPTERUS_CINCLI/PHILOPTERUS CINCLI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/PHILOPTERUS_CINCLI/future-maps/future.pdf",
        url: "/PHILOPTERUS_CINCLI",
        urlCSV: "pdf/web/species-pages/PHILOPTERUS_CINCLI/PHILOPTERUS CINCLI pearldata.csv"
    };
    res.render('PHILOPTERUS_CINCLI', renderObj);
});

// Grab data from document
routerPHILOPTERUS_CINCLI.post('/', function(req, res) {

    res.end();
});

module.exports = routerPHILOPTERUS_CINCLI;
