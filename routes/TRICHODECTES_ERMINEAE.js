var express = require('express');
var routerTRICHODECTES_ERMINEAE = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerTRICHODECTES_ERMINEAE.get('/', function(req, res) {

    var renderObj = {
        title: "Trichodectes ermineae",
        currMap: "pdf/web/viewer.html?file=species-pages/TRICHODECTES_ERMINEAE/TRICHODECTES ERMINEAE current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/TRICHODECTES_ERMINEAE/future-maps/future.pdf",
        url: "/TRICHODECTES_ERMINEAE",
        urlCSV: "pdf/web/species-pages/TRICHODECTES_ERMINEAE/TRICHODECTES ERMINEAE pearldata.csv"
    };
    res.render('TRICHODECTES_ERMINEAE', renderObj);
});

// Grab data from document
routerTRICHODECTES_ERMINEAE.post('/', function(req, res) {

    res.end();
});

module.exports = routerTRICHODECTES_ERMINEAE;
