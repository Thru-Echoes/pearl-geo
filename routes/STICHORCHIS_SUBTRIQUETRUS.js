var express = require('express');
var routerSTICHORCHIS_SUBTRIQUETRUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerSTICHORCHIS_SUBTRIQUETRUS.get('/', function(req, res) {

    var renderObj = {
        title: "Stichorchis subtriquetrus",
        currMap: "pdf/web/viewer.html?file=species-pages/STICHORCHIS_SUBTRIQUETRUS/STICHORCHIS SUBTRIQUETRUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/STICHORCHIS_SUBTRIQUETRUS/future-maps/future.pdf",
        url: "/STICHORCHIS_SUBTRIQUETRUS",
        urlCSV: "pdf/web/species-pages/STICHORCHIS_SUBTRIQUETRUS/STICHORCHIS SUBTRIQUETRUS pearldata.csv"
    };
    res.render('STICHORCHIS_SUBTRIQUETRUS', renderObj);
});

// Grab data from document
routerSTICHORCHIS_SUBTRIQUETRUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerSTICHORCHIS_SUBTRIQUETRUS;
