var express = require('express');
var routerARGAS_BRUMPTI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerARGAS_BRUMPTI.get('/', function(req, res) {

    var renderObj = {
        title: "Argas brumpti",
        currMap: "pdf/web/viewer.html?file=species-pages/ARGAS_BRUMPTI/ARGAS BRUMPTI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/ARGAS_BRUMPTI/future-maps/future.pdf",
        url: "/ARGAS_BRUMPTI",
        urlCSV: "pdf/web/species-pages/ARGAS_BRUMPTI/ARGAS BRUMPTI pearldata.csv"
    };
    res.render('ARGAS_BRUMPTI', renderObj);
});

// Grab data from document
routerARGAS_BRUMPTI.post('/', function(req, res) {

    res.end();
});

module.exports = routerARGAS_BRUMPTI;
