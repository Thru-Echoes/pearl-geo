var express = require('express');
var routerCTENOPHTHALMUS_ORIENTALIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCTENOPHTHALMUS_ORIENTALIS.get('/', function(req, res) {

    var renderObj = {
        title: "Ctenophthalmus orientalis",
        currMap: "pdf/web/viewer.html?file=species-pages/CTENOPHTHALMUS_ORIENTALIS/CTENOPHTHALMUS ORIENTALIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/CTENOPHTHALMUS_ORIENTALIS/future-maps/future.pdf",
        url: "/CTENOPHTHALMUS_ORIENTALIS",
        urlCSV: "pdf/web/species-pages/CTENOPHTHALMUS_ORIENTALIS/CTENOPHTHALMUS ORIENTALIS pearldata.csv"
    };
    res.render('CTENOPHTHALMUS_ORIENTALIS', renderObj);
});

// Grab data from document
routerCTENOPHTHALMUS_ORIENTALIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerCTENOPHTHALMUS_ORIENTALIS;
