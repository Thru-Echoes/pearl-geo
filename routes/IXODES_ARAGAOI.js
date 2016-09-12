var express = require('express');
var routerIXODES_ARAGAOI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerIXODES_ARAGAOI.get('/', function(req, res) {

    var renderObj = {
        title: "Ixodes aragaoi",
        currMap: "pdf/web/viewer.html?file=species-pages/IXODES_ARAGAOI/IXODES ARAGAOI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/IXODES_ARAGAOI/future-maps/future.pdf",
        url: "/IXODES_ARAGAOI",
        urlCSV: "pdf/web/species-pages/IXODES_ARAGAOI/IXODES ARAGAOI pearldata.csv"
    };
    res.render('IXODES_ARAGAOI', renderObj);
});

// Grab data from document
routerIXODES_ARAGAOI.post('/', function(req, res) {

    res.end();
});

module.exports = routerIXODES_ARAGAOI;
