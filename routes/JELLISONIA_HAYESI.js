var express = require('express');
var routerJELLISONIA_HAYESI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerJELLISONIA_HAYESI.get('/', function(req, res) {

    var renderObj = {
        title: "Jellisonia hayesi",
        currMap: "pdf/web/viewer.html?file=species-pages/JELLISONIA_HAYESI/JELLISONIA HAYESI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/JELLISONIA_HAYESI/future-maps/future.pdf",
        url: "/JELLISONIA_HAYESI",
        urlCSV: "pdf/web/species-pages/JELLISONIA_HAYESI/JELLISONIA HAYESI pearldata.csv"
    };
    res.render('JELLISONIA_HAYESI', renderObj);
});

// Grab data from document
routerJELLISONIA_HAYESI.post('/', function(req, res) {

    res.end();
});

module.exports = routerJELLISONIA_HAYESI;
