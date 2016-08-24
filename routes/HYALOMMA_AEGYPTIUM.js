var express = require('express');
var routerHYALOMMA_AEGYPTIUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerHYALOMMA_AEGYPTIUM.get('/', function(req, res) {

    var renderObj = {
        title: "Hyalomma aegyptium",
        currMap: "pdf/web/viewer.html?file=species-pages/HYALOMMA_AEGYPTIUM/HYALOMMA AEGYPTIUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/HYALOMMA_AEGYPTIUM/future-maps/future.pdf",
        url: "/HYALOMMA_AEGYPTIUM",
        urlCSV: "pdf/web/species-pages/HYALOMMA_AEGYPTIUM/HYALOMMA AEGYPTIUM pearldata.csv"
    };
    res.render('HYALOMMA_AEGYPTIUM', renderObj);
});

// Grab data from document
routerHYALOMMA_AEGYPTIUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerHYALOMMA_AEGYPTIUM;
