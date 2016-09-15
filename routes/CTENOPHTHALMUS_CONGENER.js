var express = require('express');
var routerCTENOPHTHALMUS_CONGENER = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCTENOPHTHALMUS_CONGENER.get('/', function(req, res) {

    var renderObj = {
        title: "Ctenophthalmus congener",
        currMap: "pdf/web/viewer.html?file=species-pages/CTENOPHTHALMUS_CONGENER/CTENOPHTHALMUS CONGENER current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/CTENOPHTHALMUS_CONGENER/future-maps/future.pdf",
        url: "/CTENOPHTHALMUS_CONGENER",
        urlCSV: "pdf/web/species-pages/CTENOPHTHALMUS_CONGENER/CTENOPHTHALMUS CONGENER pearldata.csv"
    };
    res.render('CTENOPHTHALMUS_CONGENER', renderObj);
});

// Grab data from document
routerCTENOPHTHALMUS_CONGENER.post('/', function(req, res) {

    res.end();
});

module.exports = routerCTENOPHTHALMUS_CONGENER;
