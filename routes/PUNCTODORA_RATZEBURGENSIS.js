var express = require('express');
var routerPUNCTODORA_RATZEBURGENSIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerPUNCTODORA_RATZEBURGENSIS.get('/', function(req, res) {

    var renderObj = {
        title: "Punctodora ratzeburgensis",
        currMap: "pdf/web/viewer.html?file=species-pages/PUNCTODORA_RATZEBURGENSIS/PUNCTODORA RATZEBURGENSIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/PUNCTODORA_RATZEBURGENSIS/future-maps/future.pdf",
        url: "/PUNCTODORA_RATZEBURGENSIS",
        urlCSV: "pdf/web/species-pages/PUNCTODORA_RATZEBURGENSIS/PUNCTODORA RATZEBURGENSIS pearldata.csv"
    };
    res.render('PUNCTODORA_RATZEBURGENSIS', renderObj);
});

// Grab data from document
routerPUNCTODORA_RATZEBURGENSIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerPUNCTODORA_RATZEBURGENSIS;
