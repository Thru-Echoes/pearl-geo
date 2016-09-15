var express = require('express');
var routerELAEOPHORA_SCHNEIDERI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerELAEOPHORA_SCHNEIDERI.get('/', function(req, res) {

    var renderObj = {
        title: "Elaeophora schneideri",
        currMap: "pdf/web/viewer.html?file=species-pages/ELAEOPHORA_SCHNEIDERI/ELAEOPHORA SCHNEIDERI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/ELAEOPHORA_SCHNEIDERI/future-maps/future.pdf",
        url: "/ELAEOPHORA_SCHNEIDERI",
        urlCSV: "pdf/web/species-pages/ELAEOPHORA_SCHNEIDERI/ELAEOPHORA SCHNEIDERI pearldata.csv"
    };
    res.render('ELAEOPHORA_SCHNEIDERI', renderObj);
});

// Grab data from document
routerELAEOPHORA_SCHNEIDERI.post('/', function(req, res) {

    res.end();
});

module.exports = routerELAEOPHORA_SCHNEIDERI;
