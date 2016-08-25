var express = require('express');
var routerISCHNOPSYLLUS_HEXACTENUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerISCHNOPSYLLUS_HEXACTENUS.get('/', function(req, res) {

    var renderObj = {
        title: "Ischnopsyllus hexactenus",
        currMap: "pdf/web/viewer.html?file=species-pages/ISCHNOPSYLLUS_HEXACTENUS/ISCHNOPSYLLUS HEXACTENUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/ISCHNOPSYLLUS_HEXACTENUS/future-maps/future.pdf",
        url: "/ISCHNOPSYLLUS_HEXACTENUS",
        urlCSV: "pdf/web/species-pages/ISCHNOPSYLLUS_HEXACTENUS/ISCHNOPSYLLUS HEXACTENUS pearldata.csv"
    };
    res.render('ISCHNOPSYLLUS_HEXACTENUS', renderObj);
});

// Grab data from document
routerISCHNOPSYLLUS_HEXACTENUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerISCHNOPSYLLUS_HEXACTENUS;
