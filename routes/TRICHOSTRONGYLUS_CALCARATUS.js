var express = require('express');
var routerTRICHOSTRONGYLUS_CALCARATUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerTRICHOSTRONGYLUS_CALCARATUS.get('/', function(req, res) {

    var renderObj = {
        title: "Trichostrongylus calcaratus",
        currMap: "pdf/web/viewer.html?file=species-pages/TRICHOSTRONGYLUS_CALCARATUS/TRICHOSTRONGYLUS CALCARATUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/TRICHOSTRONGYLUS_CALCARATUS/future-maps/future.pdf",
        url: "/TRICHOSTRONGYLUS_CALCARATUS",
        urlCSV: "pdf/web/species-pages/TRICHOSTRONGYLUS_CALCARATUS/TRICHOSTRONGYLUS CALCARATUS pearldata.csv"
    };
    res.render('TRICHOSTRONGYLUS_CALCARATUS', renderObj);
});

// Grab data from document
routerTRICHOSTRONGYLUS_CALCARATUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerTRICHOSTRONGYLUS_CALCARATUS;
