var express = require('express');
var routerTORTONIA_SP = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerTORTONIA_SP.get('/', function(req, res) {

    var renderObj = {
        title: "Tortonia sp",
        currMap: "pdf/web/viewer.html?file=species-pages/TORTONIA_SP/TORTONIA SP current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/TORTONIA_SP/future-maps/future.pdf",
        url: "/TORTONIA_SP",
        urlCSV: "pdf/web/species-pages/TORTONIA_SP/TORTONIA SP pearldata.csv"
    };
    res.render('TORTONIA_SP', renderObj);
});

// Grab data from document
routerTORTONIA_SP.post('/', function(req, res) {

    res.end();
});

module.exports = routerTORTONIA_SP;
