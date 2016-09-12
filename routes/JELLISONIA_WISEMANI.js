var express = require('express');
var routerJELLISONIA_WISEMANI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerJELLISONIA_WISEMANI.get('/', function(req, res) {

    var renderObj = {
        title: "Jellisonia wisemani",
        currMap: "pdf/web/viewer.html?file=species-pages/JELLISONIA_WISEMANI/JELLISONIA WISEMANI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/JELLISONIA_WISEMANI/future-maps/future.pdf",
        url: "/JELLISONIA_WISEMANI",
        urlCSV: "pdf/web/species-pages/JELLISONIA_WISEMANI/JELLISONIA WISEMANI pearldata.csv"
    };
    res.render('JELLISONIA_WISEMANI', renderObj);
});

// Grab data from document
routerJELLISONIA_WISEMANI.post('/', function(req, res) {

    res.end();
});

module.exports = routerJELLISONIA_WISEMANI;
