var express = require('express');
var routerCTENOPHTHALMUS_AGYRTES = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCTENOPHTHALMUS_AGYRTES.get('/', function(req, res) {

    var renderObj = {
        title: "Ctenophthalmus agyrtes",
        currMap: "pdf/web/viewer.html?file=species-pages/CTENOPHTHALMUS_AGYRTES/CTENOPHTHALMUS AGYRTES current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/CTENOPHTHALMUS_AGYRTES/future-maps/future.pdf",
        url: "/CTENOPHTHALMUS_AGYRTES",
        urlCSV: "pdf/web/species-pages/CTENOPHTHALMUS_AGYRTES/CTENOPHTHALMUS AGYRTES pearldata.csv"
    };
    res.render('CTENOPHTHALMUS_AGYRTES', renderObj);
});

// Grab data from document
routerCTENOPHTHALMUS_AGYRTES.post('/', function(req, res) {

    res.end();
});

module.exports = routerCTENOPHTHALMUS_AGYRTES;
