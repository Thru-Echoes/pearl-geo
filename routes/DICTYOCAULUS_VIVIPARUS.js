var express = require('express');
var routerDICTYOCAULUS_VIVIPARUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerDICTYOCAULUS_VIVIPARUS.get('/', function(req, res) {

    var renderObj = {
        title: "Dictyocaulus viviparus",
        currMap: "pdf/web/viewer.html?file=species-pages/DICTYOCAULUS_VIVIPARUS/DICTYOCAULUS VIVIPARUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/DICTYOCAULUS_VIVIPARUS/future-maps/future.pdf",
        url: "/DICTYOCAULUS_VIVIPARUS",
        urlCSV: "pdf/web/species-pages/DICTYOCAULUS_VIVIPARUS/DICTYOCAULUS VIVIPARUS pearldata.csv"
    };
    res.render('DICTYOCAULUS_VIVIPARUS', renderObj);
});

// Grab data from document
routerDICTYOCAULUS_VIVIPARUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerDICTYOCAULUS_VIVIPARUS;
