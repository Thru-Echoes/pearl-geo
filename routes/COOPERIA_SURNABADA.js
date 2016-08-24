var express = require('express');
var routerCOOPERIA_SURNABADA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCOOPERIA_SURNABADA.get('/', function(req, res) {

    var renderObj = {
        title: "Cooperia surnabada",
        currMap: "pdf/web/viewer.html?file=species-pages/COOPERIA_SURNABADA/COOPERIA SURNABADA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/COOPERIA_SURNABADA/future-maps/future.pdf",
        url: "/COOPERIA_SURNABADA",
        urlCSV: "pdf/web/species-pages/COOPERIA_SURNABADA/COOPERIA SURNABADA pearldata.csv"
    };
    res.render('COOPERIA_SURNABADA', renderObj);
});

// Grab data from document
routerCOOPERIA_SURNABADA.post('/', function(req, res) {

    res.end();
});

module.exports = routerCOOPERIA_SURNABADA;
