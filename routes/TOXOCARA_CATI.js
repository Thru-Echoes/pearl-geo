var express = require('express');
var routerTOXOCARA_CATI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerTOXOCARA_CATI.get('/', function(req, res) {

    var renderObj = {
        title: "Toxocara cati",
        currMap: "pdf/web/viewer.html?file=species-pages/TOXOCARA_CATI/TOXOCARA CATI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/TOXOCARA_CATI/future-maps/future.pdf",
        url: "/TOXOCARA_CATI",
        urlCSV: "pdf/web/species-pages/TOXOCARA_CATI/TOXOCARA CATI pearldata.csv"
    };
    res.render('TOXOCARA_CATI', renderObj);
});

// Grab data from document
routerTOXOCARA_CATI.post('/', function(req, res) {

    res.end();
});

module.exports = routerTOXOCARA_CATI;
