var express = require('express');
var routerCTENOPHTHALMUS_BISOCTODENTATUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCTENOPHTHALMUS_BISOCTODENTATUS.get('/', function(req, res) {

    var renderObj = {
        title: "Ctenophthalmus bisoctodentatus",
        currMap: "pdf/web/viewer.html?file=species-pages/CTENOPHTHALMUS_BISOCTODENTATUS/CTENOPHTHALMUS BISOCTODENTATUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/CTENOPHTHALMUS_BISOCTODENTATUS/future-maps/future.pdf",
        url: "/CTENOPHTHALMUS_BISOCTODENTATUS",
        urlCSV: "pdf/web/species-pages/CTENOPHTHALMUS_BISOCTODENTATUS/CTENOPHTHALMUS BISOCTODENTATUS pearldata.csv"
    };
    res.render('CTENOPHTHALMUS_BISOCTODENTATUS', renderObj);
});

// Grab data from document
routerCTENOPHTHALMUS_BISOCTODENTATUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerCTENOPHTHALMUS_BISOCTODENTATUS;
