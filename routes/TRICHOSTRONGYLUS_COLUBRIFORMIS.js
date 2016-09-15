var express = require('express');
var routerTRICHOSTRONGYLUS_COLUBRIFORMIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerTRICHOSTRONGYLUS_COLUBRIFORMIS.get('/', function(req, res) {

    var renderObj = {
        title: "Trichostrongylus colubriformis",
        currMap: "pdf/web/viewer.html?file=species-pages/TRICHOSTRONGYLUS_COLUBRIFORMIS/TRICHOSTRONGYLUS COLUBRIFORMIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/TRICHOSTRONGYLUS_COLUBRIFORMIS/future-maps/future.pdf",
        url: "/TRICHOSTRONGYLUS_COLUBRIFORMIS",
        urlCSV: "pdf/web/species-pages/TRICHOSTRONGYLUS_COLUBRIFORMIS/TRICHOSTRONGYLUS COLUBRIFORMIS pearldata.csv"
    };
    res.render('TRICHOSTRONGYLUS_COLUBRIFORMIS', renderObj);
});

// Grab data from document
routerTRICHOSTRONGYLUS_COLUBRIFORMIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerTRICHOSTRONGYLUS_COLUBRIFORMIS;
