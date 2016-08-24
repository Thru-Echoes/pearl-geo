var express = require('express');
var routerHYALOMMA_ANATOLICUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerHYALOMMA_ANATOLICUM.get('/', function(req, res) {

    var renderObj = {
        title: "Hyalomma anatolicum",
        currMap: "pdf/web/viewer.html?file=species-pages/HYALOMMA_ANATOLICUM/HYALOMMA ANATOLICUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/HYALOMMA_ANATOLICUM/future-maps/future.pdf",
        url: "/HYALOMMA_ANATOLICUM",
        urlCSV: "pdf/web/species-pages/HYALOMMA_ANATOLICUM/HYALOMMA ANATOLICUM pearldata.csv"
    };
    res.render('HYALOMMA_ANATOLICUM', renderObj);
});

// Grab data from document
routerHYALOMMA_ANATOLICUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerHYALOMMA_ANATOLICUM;
