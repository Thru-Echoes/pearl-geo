var express = require('express');
var routerJELLISONIA_BONIA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerJELLISONIA_BONIA.get('/', function(req, res) {

    var renderObj = {
        title: "Jellisonia bonia",
        currMap: "pdf/web/viewer.html?file=species-pages/JELLISONIA_BONIA/JELLISONIA BONIA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/JELLISONIA_BONIA/future-maps/future.pdf",
        url: "/JELLISONIA_BONIA",
        urlCSV: "pdf/web/species-pages/JELLISONIA_BONIA/JELLISONIA BONIA pearldata.csv"
    };
    res.render('JELLISONIA_BONIA', renderObj);
});

// Grab data from document
routerJELLISONIA_BONIA.post('/', function(req, res) {

    res.end();
});

module.exports = routerJELLISONIA_BONIA;
