var express = require('express');
var routerARGAS_VESPERTILIONIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerARGAS_VESPERTILIONIS.get('/', function(req, res) {

    var renderObj = {
        title: "Argas vespertilionis",
        currMap: "pdf/web/viewer.html?file=species-pages/ARGAS_VESPERTILIONIS/ARGAS VESPERTILIONIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/ARGAS_VESPERTILIONIS/future-maps/future.pdf",
        url: "/ARGAS_VESPERTILIONIS",
        urlCSV: "pdf/web/species-pages/ARGAS_VESPERTILIONIS/ARGAS VESPERTILIONIS pearldata.csv"
    };
    res.render('ARGAS_VESPERTILIONIS', renderObj);
});

// Grab data from document
routerARGAS_VESPERTILIONIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerARGAS_VESPERTILIONIS;
