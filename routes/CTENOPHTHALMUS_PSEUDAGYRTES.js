var express = require('express');
var routerCTENOPHTHALMUS_PSEUDAGYRTES = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCTENOPHTHALMUS_PSEUDAGYRTES.get('/', function(req, res) {

    var renderObj = {
        title: "Ctenophthalmus pseudagyrtes",
        currMap: "pdf/web/viewer.html?file=species-pages/CTENOPHTHALMUS_PSEUDAGYRTES/CTENOPHTHALMUS PSEUDAGYRTES current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/CTENOPHTHALMUS_PSEUDAGYRTES/future-maps/future.pdf",
        url: "/CTENOPHTHALMUS_PSEUDAGYRTES",
        urlCSV: "pdf/web/species-pages/CTENOPHTHALMUS_PSEUDAGYRTES/CTENOPHTHALMUS PSEUDAGYRTES pearldata.csv"
    };
    res.render('CTENOPHTHALMUS_PSEUDAGYRTES', renderObj);
});

// Grab data from document
routerCTENOPHTHALMUS_PSEUDAGYRTES.post('/', function(req, res) {

    res.end();
});

module.exports = routerCTENOPHTHALMUS_PSEUDAGYRTES;
