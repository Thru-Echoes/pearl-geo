var express = require('express');
var routerOXYURIS_EQUI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerOXYURIS_EQUI.get('/', function(req, res) {

    var renderObj = {
        title: "Oxyuris equi",
        currMap: "pdf/web/viewer.html?file=species-pages/OXYURIS_EQUI/OXYURIS EQUI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/OXYURIS_EQUI/future-maps/future.pdf",
        url: "/OXYURIS_EQUI",
        urlCSV: "pdf/web/species-pages/OXYURIS_EQUI/OXYURIS EQUI pearldata.csv"
    };
    res.render('OXYURIS_EQUI', renderObj);
});

// Grab data from document
routerOXYURIS_EQUI.post('/', function(req, res) {

    res.end();
});

module.exports = routerOXYURIS_EQUI;
