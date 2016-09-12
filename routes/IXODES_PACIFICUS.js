var express = require('express');
var routerIXODES_PACIFICUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerIXODES_PACIFICUS.get('/', function(req, res) {

    var renderObj = {
        title: "Ixodes pacificus",
        currMap: "pdf/web/viewer.html?file=species-pages/IXODES_PACIFICUS/IXODES PACIFICUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/IXODES_PACIFICUS/future-maps/future.pdf",
        url: "/IXODES_PACIFICUS",
        urlCSV: "pdf/web/species-pages/IXODES_PACIFICUS/IXODES PACIFICUS pearldata.csv"
    };
    res.render('IXODES_PACIFICUS', renderObj);
});

// Grab data from document
routerIXODES_PACIFICUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerIXODES_PACIFICUS;
