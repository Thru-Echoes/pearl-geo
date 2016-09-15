var express = require('express');
var routerTRAVASSOSIUS_AMERICANUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerTRAVASSOSIUS_AMERICANUS.get('/', function(req, res) {

    var renderObj = {
        title: "Travassosius americanus",
        currMap: "pdf/web/viewer.html?file=species-pages/TRAVASSOSIUS_AMERICANUS/TRAVASSOSIUS AMERICANUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/TRAVASSOSIUS_AMERICANUS/future-maps/future.pdf",
        url: "/TRAVASSOSIUS_AMERICANUS",
        urlCSV: "pdf/web/species-pages/TRAVASSOSIUS_AMERICANUS/TRAVASSOSIUS AMERICANUS pearldata.csv"
    };
    res.render('TRAVASSOSIUS_AMERICANUS', renderObj);
});

// Grab data from document
routerTRAVASSOSIUS_AMERICANUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerTRAVASSOSIUS_AMERICANUS;
