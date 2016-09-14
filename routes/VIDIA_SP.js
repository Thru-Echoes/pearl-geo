var express = require('express');
var routerVIDIA_SP = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerVIDIA_SP.get('/', function(req, res) {

    var renderObj = {
        title: "Vidia sp",
        currMap: "pdf/web/viewer.html?file=species-pages/VIDIA_SP/VIDIA SP current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/VIDIA_SP/future-maps/future.pdf",
        url: "/VIDIA_SP",
        urlCSV: "pdf/web/species-pages/VIDIA_SP/VIDIA SP pearldata.csv"
    };
    res.render('VIDIA_SP', renderObj);
});

// Grab data from document
routerVIDIA_SP.post('/', function(req, res) {

    res.end();
});

module.exports = routerVIDIA_SP;
