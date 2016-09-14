var express = require('express');
var routerTAENIA_HYDATIGENA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerTAENIA_HYDATIGENA.get('/', function(req, res) {

    var renderObj = {
        title: "Taenia hydatigena",
        currMap: "pdf/web/viewer.html?file=species-pages/TAENIA_HYDATIGENA/TAENIA HYDATIGENA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/TAENIA_HYDATIGENA/future-maps/future.pdf",
        url: "/TAENIA_HYDATIGENA",
        urlCSV: "pdf/web/species-pages/TAENIA_HYDATIGENA/TAENIA HYDATIGENA pearldata.csv"
    };
    res.render('TAENIA_HYDATIGENA', renderObj);
});

// Grab data from document
routerTAENIA_HYDATIGENA.post('/', function(req, res) {

    res.end();
});

module.exports = routerTAENIA_HYDATIGENA;
