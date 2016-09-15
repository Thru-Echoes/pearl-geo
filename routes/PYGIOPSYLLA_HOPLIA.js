var express = require('express');
var routerPYGIOPSYLLA_HOPLIA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerPYGIOPSYLLA_HOPLIA.get('/', function(req, res) {

    var renderObj = {
        title: "Pygiopsylla hoplia",
        currMap: "pdf/web/viewer.html?file=species-pages/PYGIOPSYLLA_HOPLIA/PYGIOPSYLLA HOPLIA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/PYGIOPSYLLA_HOPLIA/future-maps/future.pdf",
        url: "/PYGIOPSYLLA_HOPLIA",
        urlCSV: "pdf/web/species-pages/PYGIOPSYLLA_HOPLIA/PYGIOPSYLLA HOPLIA pearldata.csv"
    };
    res.render('PYGIOPSYLLA_HOPLIA', renderObj);
});

// Grab data from document
routerPYGIOPSYLLA_HOPLIA.post('/', function(req, res) {

    res.end();
});

module.exports = routerPYGIOPSYLLA_HOPLIA;
