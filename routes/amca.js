var express = require('express');
var routerAmca = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAmca.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma cajennense",
        clade: "Ixodida",
        source: "GBIF USNPC",
        currMap: "pdf/web/viewer.html?file=species-pages/amca/AMBLYOMMA CAJENNENSE current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/amca/future-maps/future.pdf",
        url: "/amca",
        urlCSV: "pdf/web/species-pages/amca/AMBLYOMMA CAJENNENSE pearldata.csv"
    };
    res.render('Amca', renderObj);
});

// Grab data from document
routerAmca.post('/', function(req, res) {

    res.end();
});

module.exports = routerAmca;
