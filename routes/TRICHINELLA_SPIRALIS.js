var express = require('express');
var routerTRICHINELLA_SPIRALIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerTRICHINELLA_SPIRALIS.get('/', function(req, res) {

    var renderObj = {
        title: "Trichinella spiralis",
        currMap: "pdf/web/viewer.html?file=species-pages/TRICHINELLA_SPIRALIS/TRICHINELLA SPIRALIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/TRICHINELLA_SPIRALIS/future-maps/future.pdf",
        url: "/TRICHINELLA_SPIRALIS",
        urlCSV: "pdf/web/species-pages/TRICHINELLA_SPIRALIS/TRICHINELLA SPIRALIS pearldata.csv"
    };
    res.render('TRICHINELLA_SPIRALIS', renderObj);
});

// Grab data from document
routerTRICHINELLA_SPIRALIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerTRICHINELLA_SPIRALIS;
