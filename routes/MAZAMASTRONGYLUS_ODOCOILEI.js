var express = require('express');
var routerMAZAMASTRONGYLUS_ODOCOILEI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerMAZAMASTRONGYLUS_ODOCOILEI.get('/', function(req, res) {

    var renderObj = {
        title: "Mazamastrongylus odocoilei",
        currMap: "pdf/web/viewer.html?file=species-pages/MAZAMASTRONGYLUS_ODOCOILEI/MAZAMASTRONGYLUS ODOCOILEI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/MAZAMASTRONGYLUS_ODOCOILEI/future-maps/future.pdf",
        url: "/MAZAMASTRONGYLUS_ODOCOILEI",
        urlCSV: "pdf/web/species-pages/MAZAMASTRONGYLUS_ODOCOILEI/MAZAMASTRONGYLUS ODOCOILEI pearldata.csv"
    };
    res.render('MAZAMASTRONGYLUS_ODOCOILEI', renderObj);
});

// Grab data from document
routerMAZAMASTRONGYLUS_ODOCOILEI.post('/', function(req, res) {

    res.end();
});

module.exports = routerMAZAMASTRONGYLUS_ODOCOILEI;
