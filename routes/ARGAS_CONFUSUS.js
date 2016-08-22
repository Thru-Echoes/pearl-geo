var express = require('express');
var routerARGAS_CONFUSUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerARGAS_CONFUSUS.get('/', function(req, res) {

    var renderObj = {
        title: "Argas confusus",
        currMap: "pdf/web/viewer.html?file=species-pages/ARGAS_CONFUSUS/ARGAS CONFUSUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/ARGAS_CONFUSUS/future-maps/future.pdf",
        url: "/ARGAS_CONFUSUS",
        urlCSV: "pdf/web/species-pages/ARGAS_CONFUSUS/ARGAS CONFUSUS pearldata.csv"
    };
    res.render('ARGAS_CONFUSUS', renderObj);
});

// Grab data from document
routerARGAS_CONFUSUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerARGAS_CONFUSUS;
