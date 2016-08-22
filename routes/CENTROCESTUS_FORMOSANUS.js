var express = require('express');
var routerCENTROCESTUS_FORMOSANUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCENTROCESTUS_FORMOSANUS.get('/', function(req, res) {

    var renderObj = {
        title: "Centrocestus formosanus",
        currMap: "pdf/web/viewer.html?file=species-pages/CENTROCESTUS_FORMOSANUS/CENTROCESTUS FORMOSANUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/CENTROCESTUS_FORMOSANUS/future-maps/future.pdf",
        url: "/CENTROCESTUS_FORMOSANUS",
        urlCSV: "pdf/web/species-pages/CENTROCESTUS_FORMOSANUS/CENTROCESTUS FORMOSANUS pearldata.csv"
    };
    res.render('CENTROCESTUS_FORMOSANUS', renderObj);
});

// Grab data from document
routerCENTROCESTUS_FORMOSANUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerCENTROCESTUS_FORMOSANUS;
