var express = require('express');
var routerSENNERTIONYX_SP = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerSENNERTIONYX_SP.get('/', function(req, res) {

    var renderObj = {
        title: "Sennertionyx sp",
        currMap: "pdf/web/viewer.html?file=species-pages/SENNERTIONYX_SP/SENNERTIONYX SP current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/SENNERTIONYX_SP/future-maps/future.pdf",
        url: "/SENNERTIONYX_SP",
        urlCSV: "pdf/web/species-pages/SENNERTIONYX_SP/SENNERTIONYX SP pearldata.csv"
    };
    res.render('SENNERTIONYX_SP', renderObj);
});

// Grab data from document
routerSENNERTIONYX_SP.post('/', function(req, res) {

    res.end();
});

module.exports = routerSENNERTIONYX_SP;
