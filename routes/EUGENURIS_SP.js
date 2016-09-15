var express = require('express');
var routerEUGENURIS_SP = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerEUGENURIS_SP.get('/', function(req, res) {

    var renderObj = {
        title: "Eugenuris sp",
        currMap: "pdf/web/viewer.html?file=species-pages/EUGENURIS_SP/EUGENURIS SP current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/EUGENURIS_SP/future-maps/future.pdf",
        url: "/EUGENURIS_SP",
        urlCSV: "pdf/web/species-pages/EUGENURIS_SP/EUGENURIS SP pearldata.csv"
    };
    res.render('EUGENURIS_SP', renderObj);
});

// Grab data from document
routerEUGENURIS_SP.post('/', function(req, res) {

    res.end();
});

module.exports = routerEUGENURIS_SP;
