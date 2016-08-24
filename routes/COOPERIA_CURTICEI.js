var express = require('express');
var routerCOOPERIA_CURTICEI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCOOPERIA_CURTICEI.get('/', function(req, res) {

    var renderObj = {
        title: "Cooperia curticei",
        currMap: "pdf/web/viewer.html?file=species-pages/COOPERIA_CURTICEI/COOPERIA CURTICEI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/COOPERIA_CURTICEI/future-maps/future.pdf",
        url: "/COOPERIA_CURTICEI",
        urlCSV: "pdf/web/species-pages/COOPERIA_CURTICEI/COOPERIA CURTICEI pearldata.csv"
    };
    res.render('COOPERIA_CURTICEI', renderObj);
});

// Grab data from document
routerCOOPERIA_CURTICEI.post('/', function(req, res) {

    res.end();
});

module.exports = routerCOOPERIA_CURTICEI;
