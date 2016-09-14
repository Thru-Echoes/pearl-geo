var express = require('express');
var routerDICTYOCAULUS_FILARIA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerDICTYOCAULUS_FILARIA.get('/', function(req, res) {

    var renderObj = {
        title: "Dictyocaulus filaria",
        currMap: "pdf/web/viewer.html?file=species-pages/DICTYOCAULUS_FILARIA/DICTYOCAULUS FILARIA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/DICTYOCAULUS_FILARIA/future-maps/future.pdf",
        url: "/DICTYOCAULUS_FILARIA",
        urlCSV: "pdf/web/species-pages/DICTYOCAULUS_FILARIA/DICTYOCAULUS FILARIA pearldata.csv"
    };
    res.render('DICTYOCAULUS_FILARIA', renderObj);
});

// Grab data from document
routerDICTYOCAULUS_FILARIA.post('/', function(req, res) {

    res.end();
});

module.exports = routerDICTYOCAULUS_FILARIA;
