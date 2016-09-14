var express = require('express');
var routerNEOHAEMATOPINUS_PACIFICUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerNEOHAEMATOPINUS_PACIFICUS.get('/', function(req, res) {

    var renderObj = {
        title: "Neohaematopinus pacificus",
        currMap: "pdf/web/viewer.html?file=species-pages/NEOHAEMATOPINUS_PACIFICUS/NEOHAEMATOPINUS PACIFICUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/NEOHAEMATOPINUS_PACIFICUS/future-maps/future.pdf",
        url: "/NEOHAEMATOPINUS_PACIFICUS",
        urlCSV: "pdf/web/species-pages/NEOHAEMATOPINUS_PACIFICUS/NEOHAEMATOPINUS PACIFICUS pearldata.csv"
    };
    res.render('NEOHAEMATOPINUS_PACIFICUS', renderObj);
});

// Grab data from document
routerNEOHAEMATOPINUS_PACIFICUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerNEOHAEMATOPINUS_PACIFICUS;
