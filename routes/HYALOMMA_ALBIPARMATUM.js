var express = require('express');
var routerHYALOMMA_ALBIPARMATUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerHYALOMMA_ALBIPARMATUM.get('/', function(req, res) {

    var renderObj = {
        title: "Hyalomma albiparmatum",
        currMap: "pdf/web/viewer.html?file=species-pages/HYALOMMA_ALBIPARMATUM/HYALOMMA ALBIPARMATUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/HYALOMMA_ALBIPARMATUM/future-maps/future.pdf",
        url: "/HYALOMMA_ALBIPARMATUM",
        urlCSV: "pdf/web/species-pages/HYALOMMA_ALBIPARMATUM/HYALOMMA ALBIPARMATUM pearldata.csv"
    };
    res.render('HYALOMMA_ALBIPARMATUM', renderObj);
});

// Grab data from document
routerHYALOMMA_ALBIPARMATUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerHYALOMMA_ALBIPARMATUM;
