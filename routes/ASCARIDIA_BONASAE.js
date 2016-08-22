var express = require('express');
var routerASCARIDIA_BONASAE = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerASCARIDIA_BONASAE.get('/', function(req, res) {

    var renderObj = {
        title: "Ascaridia bonasae",
        currMap: "pdf/web/viewer.html?file=species-pages/ASCARIDIA_BONASAE/ASCARIDIA BONASAE current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/ASCARIDIA_BONASAE/future-maps/future.pdf",
        url: "/ASCARIDIA_BONASAE",
        urlCSV: "pdf/web/species-pages/ASCARIDIA_BONASAE/ASCARIDIA BONASAE pearldata.csv"
    };
    res.render('ASCARIDIA_BONASAE', renderObj);
});

// Grab data from document
routerASCARIDIA_BONASAE.post('/', function(req, res) {

    res.end();
});

module.exports = routerASCARIDIA_BONASAE;
