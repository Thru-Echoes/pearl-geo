var express = require('express');
var routerMONIEZIA_EXPANSA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerMONIEZIA_EXPANSA.get('/', function(req, res) {

    var renderObj = {
        title: "Moniezia expansa",
        currMap: "pdf/web/viewer.html?file=species-pages/MONIEZIA_EXPANSA/MONIEZIA EXPANSA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/MONIEZIA_EXPANSA/future-maps/future.pdf",
        url: "/MONIEZIA_EXPANSA",
        urlCSV: "pdf/web/species-pages/MONIEZIA_EXPANSA/MONIEZIA EXPANSA pearldata.csv"
    };
    res.render('MONIEZIA_EXPANSA', renderObj);
});

// Grab data from document
routerMONIEZIA_EXPANSA.post('/', function(req, res) {

    res.end();
});

module.exports = routerMONIEZIA_EXPANSA;
