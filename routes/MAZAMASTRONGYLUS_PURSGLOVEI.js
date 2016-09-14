var express = require('express');
var routerMAZAMASTRONGYLUS_PURSGLOVEI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerMAZAMASTRONGYLUS_PURSGLOVEI.get('/', function(req, res) {

    var renderObj = {
        title: "Mazamastrongylus pursglovei",
        currMap: "pdf/web/viewer.html?file=species-pages/MAZAMASTRONGYLUS_PURSGLOVEI/MAZAMASTRONGYLUS PURSGLOVEI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/MAZAMASTRONGYLUS_PURSGLOVEI/future-maps/future.pdf",
        url: "/MAZAMASTRONGYLUS_PURSGLOVEI",
        urlCSV: "pdf/web/species-pages/MAZAMASTRONGYLUS_PURSGLOVEI/MAZAMASTRONGYLUS PURSGLOVEI pearldata.csv"
    };
    res.render('MAZAMASTRONGYLUS_PURSGLOVEI', renderObj);
});

// Grab data from document
routerMAZAMASTRONGYLUS_PURSGLOVEI.post('/', function(req, res) {

    res.end();
});

module.exports = routerMAZAMASTRONGYLUS_PURSGLOVEI;
