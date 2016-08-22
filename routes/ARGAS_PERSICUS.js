var express = require('express');
var routerARGAS_PERSICUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerARGAS_PERSICUS.get('/', function(req, res) {

    var renderObj = {
        title: "Argas persicus",
        currMap: "pdf/web/viewer.html?file=species-pages/ARGAS_PERSICUS/ARGAS PERSICUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/ARGAS_PERSICUS/future-maps/future.pdf",
        url: "/ARGAS_PERSICUS",
        urlCSV: "pdf/web/species-pages/ARGAS_PERSICUS/ARGAS PERSICUS pearldata.csv"
    };
    res.render('ARGAS_PERSICUS', renderObj);
});

// Grab data from document
routerARGAS_PERSICUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerARGAS_PERSICUS;
