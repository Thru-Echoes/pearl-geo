var express = require('express');
var routerIXODES_SIMPLEX = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerIXODES_SIMPLEX.get('/', function(req, res) {

    var renderObj = {
        title: "Ixodes simplex",
        currMap: "pdf/web/viewer.html?file=species-pages/IXODES_SIMPLEX/IXODES SIMPLEX current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/IXODES_SIMPLEX/future-maps/future.pdf",
        url: "/IXODES_SIMPLEX",
        urlCSV: "pdf/web/species-pages/IXODES_SIMPLEX/IXODES SIMPLEX pearldata.csv"
    };
    res.render('IXODES_SIMPLEX', renderObj);
});

// Grab data from document
routerIXODES_SIMPLEX.post('/', function(req, res) {

    res.end();
});

module.exports = routerIXODES_SIMPLEX;
