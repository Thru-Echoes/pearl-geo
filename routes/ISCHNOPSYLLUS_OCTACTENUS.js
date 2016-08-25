var express = require('express');
var routerISCHNOPSYLLUS_OCTACTENUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerISCHNOPSYLLUS_OCTACTENUS.get('/', function(req, res) {

    var renderObj = {
        title: "Ischnopsyllus octactenus",
        currMap: "pdf/web/viewer.html?file=species-pages/ISCHNOPSYLLUS_OCTACTENUS/ISCHNOPSYLLUS OCTACTENUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/ISCHNOPSYLLUS_OCTACTENUS/future-maps/future.pdf",
        url: "/ISCHNOPSYLLUS_OCTACTENUS",
        urlCSV: "pdf/web/species-pages/ISCHNOPSYLLUS_OCTACTENUS/ISCHNOPSYLLUS OCTACTENUS pearldata.csv"
    };
    res.render('ISCHNOPSYLLUS_OCTACTENUS', renderObj);
});

// Grab data from document
routerISCHNOPSYLLUS_OCTACTENUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerISCHNOPSYLLUS_OCTACTENUS;
