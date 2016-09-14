var express = require('express');
var routerGLYPTHELMIS_QUIETA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerGLYPTHELMIS_QUIETA.get('/', function(req, res) {

    var renderObj = {
        title: "Glypthelmis quieta",
        currMap: "pdf/web/viewer.html?file=species-pages/GLYPTHELMIS_QUIETA/GLYPTHELMIS QUIETA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/GLYPTHELMIS_QUIETA/future-maps/future.pdf",
        url: "/GLYPTHELMIS_QUIETA",
        urlCSV: "pdf/web/species-pages/GLYPTHELMIS_QUIETA/GLYPTHELMIS QUIETA pearldata.csv"
    };
    res.render('GLYPTHELMIS_QUIETA', renderObj);
});

// Grab data from document
routerGLYPTHELMIS_QUIETA.post('/', function(req, res) {

    res.end();
});

module.exports = routerGLYPTHELMIS_QUIETA;
