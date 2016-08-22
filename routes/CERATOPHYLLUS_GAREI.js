var express = require('express');
var routerCERATOPHYLLUS_GAREI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCERATOPHYLLUS_GAREI.get('/', function(req, res) {

    var renderObj = {
        title: "Ceratophyllus garei",
        currMap: "pdf/web/viewer.html?file=species-pages/CERATOPHYLLUS_GAREI/CERATOPHYLLUS GAREI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/CERATOPHYLLUS_GAREI/future-maps/future.pdf",
        url: "/CERATOPHYLLUS_GAREI",
        urlCSV: "pdf/web/species-pages/CERATOPHYLLUS_GAREI/CERATOPHYLLUS GAREI pearldata.csv"
    };
    res.render('CERATOPHYLLUS_GAREI', renderObj);
});

// Grab data from document
routerCERATOPHYLLUS_GAREI.post('/', function(req, res) {

    res.end();
});

module.exports = routerCERATOPHYLLUS_GAREI;
