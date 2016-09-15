var express = require('express');
var routerSENNERTIA_SP = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerSENNERTIA_SP.get('/', function(req, res) {

    var renderObj = {
        title: "Sennertia sp",
        currMap: "pdf/web/viewer.html?file=species-pages/SENNERTIA_SP/SENNERTIA SP current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/SENNERTIA_SP/future-maps/future.pdf",
        url: "/SENNERTIA_SP",
        urlCSV: "pdf/web/species-pages/SENNERTIA_SP/SENNERTIA SP pearldata.csv"
    };
    res.render('SENNERTIA_SP', renderObj);
});

// Grab data from document
routerSENNERTIA_SP.post('/', function(req, res) {

    res.end();
});

module.exports = routerSENNERTIA_SP;
