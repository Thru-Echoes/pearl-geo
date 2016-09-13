var express = require('express');
var routerLIGULA_INTESTINALIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerLIGULA_INTESTINALIS.get('/', function(req, res) {

    var renderObj = {
        title: "Ligula intestinalis",
        currMap: "pdf/web/viewer.html?file=species-pages/LIGULA_INTESTINALIS/LIGULA INTESTINALIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/LIGULA_INTESTINALIS/future-maps/future.pdf",
        url: "/LIGULA_INTESTINALIS",
        urlCSV: "pdf/web/species-pages/LIGULA_INTESTINALIS/LIGULA INTESTINALIS pearldata.csv"
    };
    res.render('LIGULA_INTESTINALIS', renderObj);
});

// Grab data from document
routerLIGULA_INTESTINALIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerLIGULA_INTESTINALIS;
