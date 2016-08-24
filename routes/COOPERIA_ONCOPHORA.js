var express = require('express');
var routerCOOPERIA_ONCOPHORA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCOOPERIA_ONCOPHORA.get('/', function(req, res) {

    var renderObj = {
        title: "Cooperia oncophora",
        currMap: "pdf/web/viewer.html?file=species-pages/COOPERIA_ONCOPHORA/COOPERIA ONCOPHORA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/COOPERIA_ONCOPHORA/future-maps/future.pdf",
        url: "/COOPERIA_ONCOPHORA",
        urlCSV: "pdf/web/species-pages/COOPERIA_ONCOPHORA/COOPERIA ONCOPHORA pearldata.csv"
    };
    res.render('COOPERIA_ONCOPHORA', renderObj);
});

// Grab data from document
routerCOOPERIA_ONCOPHORA.post('/', function(req, res) {

    res.end();
});

module.exports = routerCOOPERIA_ONCOPHORA;
