var express = require('express');
var routerAmpo = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAmpo.get('/', function(req, res) {

    var renderObj = {
        title: "Amblyomma pomposum",
        clade: "Ixodida",
        source: "Cumming GBIF",
        currMap: "pdf/web/viewer.html?file=species-pages/abba/ABBREVIATA BANCROFTI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/abba/future-maps/future.pdf",
        url: "/ampo",
        urlCSV: "pdf/web/species-pages/abba/ABBREVIATA BANCROFTI pearldata.csv"
    };
    res.render('Ampo', renderObj);
});

// Grab data from document
routerAmpo.post('/', function(req, res) {

    res.end();
});

module.exports = routerAmpo;
