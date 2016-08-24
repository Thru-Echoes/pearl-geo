var express = require('express');
var routerHYPOPI_SP = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerHYPOPI_SP.get('/', function(req, res) {

    var renderObj = {
        title: "Hypopi sp.",
        currMap: "pdf/web/viewer.html?file=species-pages/HYPOPI_SP/HYPOPI SP. current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/HYPOPI_SP/future-maps/future.pdf",
        url: "/HYPOPI_SP",
        urlCSV: "pdf/web/species-pages/HYPOPI_SP/HYPOPI SP. pearldata.csv"
    };
    res.render('HYPOPI_SP', renderObj);
});

// Grab data from document
routerHYPOPI_SP.post('/', function(req, res) {

    res.end();
});

module.exports = routerHYPOPI_SP;
