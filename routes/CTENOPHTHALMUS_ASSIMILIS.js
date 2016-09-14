var express = require('express');
var routerCTENOPHTHALMUS_ASSIMILIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCTENOPHTHALMUS_ASSIMILIS.get('/', function(req, res) {

    var renderObj = {
        title: "Ctenophthalmus assimilis",
        currMap: "pdf/web/viewer.html?file=species-pages/CTENOPHTHALMUS_ASSIMILIS/CTENOPHTHALMUS ASSIMILIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/CTENOPHTHALMUS_ASSIMILIS/future-maps/future.pdf",
        url: "/CTENOPHTHALMUS_ASSIMILIS",
        urlCSV: "pdf/web/species-pages/CTENOPHTHALMUS_ASSIMILIS/CTENOPHTHALMUS ASSIMILIS pearldata.csv"
    };
    res.render('CTENOPHTHALMUS_ASSIMILIS', renderObj);
});

// Grab data from document
routerCTENOPHTHALMUS_ASSIMILIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerCTENOPHTHALMUS_ASSIMILIS;
