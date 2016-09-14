var express = require('express');
var routerCTENOPHTHALMUS_NIFETODES = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCTENOPHTHALMUS_NIFETODES.get('/', function(req, res) {

    var renderObj = {
        title: "Ctenophthalmus nifetodes",
        currMap: "pdf/web/viewer.html?file=species-pages/CTENOPHTHALMUS_NIFETODES/CTENOPHTHALMUS NIFETODES current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/CTENOPHTHALMUS_NIFETODES/future-maps/future.pdf",
        url: "/CTENOPHTHALMUS_NIFETODES",
        urlCSV: "pdf/web/species-pages/CTENOPHTHALMUS_NIFETODES/CTENOPHTHALMUS NIFETODES pearldata.csv"
    };
    res.render('CTENOPHTHALMUS_NIFETODES', renderObj);
});

// Grab data from document
routerCTENOPHTHALMUS_NIFETODES.post('/', function(req, res) {

    res.end();
});

module.exports = routerCTENOPHTHALMUS_NIFETODES;
