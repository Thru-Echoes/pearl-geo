var express = require('express');
var routerCYLINDROTAENIA_AMERICANA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCYLINDROTAENIA_AMERICANA.get('/', function(req, res) {

    var renderObj = {
        title: "Cylindrotaenia americana",
        currMap: "pdf/web/viewer.html?file=species-pages/CYLINDROTAENIA_AMERICANA/CYLINDROTAENIA AMERICANA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/CYLINDROTAENIA_AMERICANA/future-maps/future.pdf",
        url: "/CYLINDROTAENIA_AMERICANA",
        urlCSV: "pdf/web/species-pages/CYLINDROTAENIA_AMERICANA/CYLINDROTAENIA AMERICANA pearldata.csv"
    };
    res.render('CYLINDROTAENIA_AMERICANA', renderObj);
});

// Grab data from document
routerCYLINDROTAENIA_AMERICANA.post('/', function(req, res) {

    res.end();
});

module.exports = routerCYLINDROTAENIA_AMERICANA;
