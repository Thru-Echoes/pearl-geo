var express = require('express');
var routerJELLISONIA_KLOTSI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerJELLISONIA_KLOTSI.get('/', function(req, res) {

    var renderObj = {
        title: "Jellisonia klotsi",
        currMap: "pdf/web/viewer.html?file=species-pages/JELLISONIA_KLOTSI/JELLISONIA KLOTSI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/JELLISONIA_KLOTSI/future-maps/future.pdf",
        url: "/JELLISONIA_KLOTSI",
        urlCSV: "pdf/web/species-pages/JELLISONIA_KLOTSI/JELLISONIA KLOTSI pearldata.csv"
    };
    res.render('JELLISONIA_KLOTSI', renderObj);
});

// Grab data from document
routerJELLISONIA_KLOTSI.post('/', function(req, res) {

    res.end();
});

module.exports = routerJELLISONIA_KLOTSI;
