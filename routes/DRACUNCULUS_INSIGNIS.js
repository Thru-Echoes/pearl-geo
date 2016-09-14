var express = require('express');
var routerDRACUNCULUS_INSIGNIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerDRACUNCULUS_INSIGNIS.get('/', function(req, res) {

    var renderObj = {
        title: "Dracunculus insignis",
        currMap: "pdf/web/viewer.html?file=species-pages/DRACUNCULUS_INSIGNIS/DRACUNCULUS INSIGNIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/DRACUNCULUS_INSIGNIS/future-maps/future.pdf",
        url: "/DRACUNCULUS_INSIGNIS",
        urlCSV: "pdf/web/species-pages/DRACUNCULUS_INSIGNIS/DRACUNCULUS INSIGNIS pearldata.csv"
    };
    res.render('DRACUNCULUS_INSIGNIS', renderObj);
});

// Grab data from document
routerDRACUNCULUS_INSIGNIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerDRACUNCULUS_INSIGNIS;
