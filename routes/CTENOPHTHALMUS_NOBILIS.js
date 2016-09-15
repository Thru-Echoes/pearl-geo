var express = require('express');
var routerCTENOPHTHALMUS_NOBILIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCTENOPHTHALMUS_NOBILIS.get('/', function(req, res) {

    var renderObj = {
        title: "Ctenophthalmus nobilis",
        currMap: "pdf/web/viewer.html?file=species-pages/CTENOPHTHALMUS_NOBILIS/CTENOPHTHALMUS NOBILIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/CTENOPHTHALMUS_NOBILIS/future-maps/future.pdf",
        url: "/CTENOPHTHALMUS_NOBILIS",
        urlCSV: "pdf/web/species-pages/CTENOPHTHALMUS_NOBILIS/CTENOPHTHALMUS NOBILIS pearldata.csv"
    };
    res.render('CTENOPHTHALMUS_NOBILIS', renderObj);
});

// Grab data from document
routerCTENOPHTHALMUS_NOBILIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerCTENOPHTHALMUS_NOBILIS;
