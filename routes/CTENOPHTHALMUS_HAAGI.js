var express = require('express');
var routerCTENOPHTHALMUS_HAAGI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCTENOPHTHALMUS_HAAGI.get('/', function(req, res) {

    var renderObj = {
        title: "Ctenophthalmus haagi",
        currMap: "pdf/web/viewer.html?file=species-pages/CTENOPHTHALMUS_HAAGI/CTENOPHTHALMUS HAAGI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/CTENOPHTHALMUS_HAAGI/future-maps/future.pdf",
        url: "/CTENOPHTHALMUS_HAAGI",
        urlCSV: "pdf/web/species-pages/CTENOPHTHALMUS_HAAGI/CTENOPHTHALMUS HAAGI pearldata.csv"
    };
    res.render('CTENOPHTHALMUS_HAAGI', renderObj);
});

// Grab data from document
routerCTENOPHTHALMUS_HAAGI.post('/', function(req, res) {

    res.end();
});

module.exports = routerCTENOPHTHALMUS_HAAGI;
