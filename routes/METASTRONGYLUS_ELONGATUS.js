var express = require('express');
var routerMETASTRONGYLUS_ELONGATUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerMETASTRONGYLUS_ELONGATUS.get('/', function(req, res) {

    var renderObj = {
        title: "Metastrongylus elongatus",
        currMap: "pdf/web/viewer.html?file=species-pages/METASTRONGYLUS_ELONGATUS/METASTRONGYLUS ELONGATUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/METASTRONGYLUS_ELONGATUS/future-maps/future.pdf",
        url: "/METASTRONGYLUS_ELONGATUS",
        urlCSV: "pdf/web/species-pages/METASTRONGYLUS_ELONGATUS/METASTRONGYLUS ELONGATUS pearldata.csv"
    };
    res.render('METASTRONGYLUS_ELONGATUS', renderObj);
});

// Grab data from document
routerMETASTRONGYLUS_ELONGATUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerMETASTRONGYLUS_ELONGATUS;
