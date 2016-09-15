var express = require('express');
var routerSTRIGEA_FALCONIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerSTRIGEA_FALCONIS.get('/', function(req, res) {

    var renderObj = {
        title: "Strigea falconis",
        currMap: "pdf/web/viewer.html?file=species-pages/STRIGEA_FALCONIS/STRIGEA FALCONIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/STRIGEA_FALCONIS/future-maps/future.pdf",
        url: "/STRIGEA_FALCONIS",
        urlCSV: "pdf/web/species-pages/STRIGEA_FALCONIS/STRIGEA FALCONIS pearldata.csv"
    };
    res.render('STRIGEA_FALCONIS', renderObj);
});

// Grab data from document
routerSTRIGEA_FALCONIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerSTRIGEA_FALCONIS;
