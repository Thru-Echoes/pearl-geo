var express = require('express');
var routerTOXOCARA_MYSTAX = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerTOXOCARA_MYSTAX.get('/', function(req, res) {

    var renderObj = {
        title: "Toxocara mystax",
        currMap: "pdf/web/viewer.html?file=species-pages/TOXOCARA_MYSTAX/TOXOCARA MYSTAX current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/TOXOCARA_MYSTAX/future-maps/future.pdf",
        url: "/TOXOCARA_MYSTAX",
        urlCSV: "pdf/web/species-pages/TOXOCARA_MYSTAX/TOXOCARA MYSTAX pearldata.csv"
    };
    res.render('TOXOCARA_MYSTAX', renderObj);
});

// Grab data from document
routerTOXOCARA_MYSTAX.post('/', function(req, res) {

    res.end();
});

module.exports = routerTOXOCARA_MYSTAX;
