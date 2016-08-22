var express = require('express');
var routerASCARIDIA_LINEATA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerASCARIDIA_LINEATA.get('/', function(req, res) {

    var renderObj = {
        title: "Ascaridia lineata",
        currMap: "pdf/web/viewer.html?file=species-pages/ASCARIDIA_LINEATA/ASCARIDIA LINEATA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/ASCARIDIA_LINEATA/future-maps/future.pdf",
        url: "/ASCARIDIA_LINEATA",
        urlCSV: "pdf/web/species-pages/ASCARIDIA_LINEATA/ASCARIDIA LINEATA pearldata.csv"
    };
    res.render('ASCARIDIA_LINEATA', renderObj);
});

// Grab data from document
routerASCARIDIA_LINEATA.post('/', function(req, res) {

    res.end();
});

module.exports = routerASCARIDIA_LINEATA;
