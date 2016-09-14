var express = require('express');
var routerGENARCHELLA_ISABELLAE = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerGENARCHELLA_ISABELLAE.get('/', function(req, res) {

    var renderObj = {
        title: "Genarchella isabellae",
        currMap: "pdf/web/viewer.html?file=species-pages/GENARCHELLA_ISABELLAE/GENARCHELLA ISABELLAE current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/GENARCHELLA_ISABELLAE/future-maps/future.pdf",
        url: "/GENARCHELLA_ISABELLAE",
        urlCSV: "pdf/web/species-pages/GENARCHELLA_ISABELLAE/GENARCHELLA ISABELLAE pearldata.csv"
    };
    res.render('GENARCHELLA_ISABELLAE', renderObj);
});

// Grab data from document
routerGENARCHELLA_ISABELLAE.post('/', function(req, res) {

    res.end();
});

module.exports = routerGENARCHELLA_ISABELLAE;
