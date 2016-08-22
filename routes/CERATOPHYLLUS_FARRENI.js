var express = require('express');
var routerCERATOPHYLLUS_FARRENI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCERATOPHYLLUS_FARRENI.get('/', function(req, res) {

    var renderObj = {
        title: "Ceratohyllus farreni",
        currMap: "pdf/web/viewer.html?file=species-pages/CERATOPHYLLUS_FARRENI/CERATOPHYLLUS FARRENI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/CERATOPHYLLUS_FARRENI/future-maps/future.pdf",
        url: "/CERATOPHYLLUS_FARRENI",
        urlCSV: "pdf/web/species-pages/CERATOPHYLLUS_FARRENI/CERATOPHYLLUS FARRENI pearldata.csv"
    };
    res.render('CERATOPHYLLUS_FARRENI', renderObj);
});

// Grab data from document
routerCERATOPHYLLUS_FARRENI.post('/', function(req, res) {

    res.end();
});

module.exports = routerCERATOPHYLLUS_FARRENI;
