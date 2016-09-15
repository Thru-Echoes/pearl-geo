var express = require('express');
var routerTRICHOSTRONGYLUS_AXEI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerTRICHOSTRONGYLUS_AXEI.get('/', function(req, res) {

    var renderObj = {
        title: "Trichostrongylus axei",
        currMap: "pdf/web/viewer.html?file=species-pages/TRICHOSTRONGYLUS_AXEI/TRICHOSTRONGYLUS AXEI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/TRICHOSTRONGYLUS_AXEI/future-maps/future.pdf",
        url: "/TRICHOSTRONGYLUS_AXEI",
        urlCSV: "pdf/web/species-pages/TRICHOSTRONGYLUS_AXEI/TRICHOSTRONGYLUS AXEI pearldata.csv"
    };
    res.render('TRICHOSTRONGYLUS_AXEI', renderObj);
});

// Grab data from document
routerTRICHOSTRONGYLUS_AXEI.post('/', function(req, res) {

    res.end();
});

module.exports = routerTRICHOSTRONGYLUS_AXEI;
