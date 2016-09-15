var express = require('express');
var routerONCHOCERCA_CERVIPEDIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerONCHOCERCA_CERVIPEDIS.get('/', function(req, res) {

    var renderObj = {
        title: "Onchocerca cervipedis",
        currMap: "pdf/web/viewer.html?file=species-pages/ONCHOCERCA_CERVIPEDIS/ONCHOCERCA CERVIPEDIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/ONCHOCERCA_CERVIPEDIS/future-maps/future.pdf",
        url: "/ONCHOCERCA_CERVIPEDIS",
        urlCSV: "pdf/web/species-pages/ONCHOCERCA_CERVIPEDIS/ONCHOCERCA CERVIPEDIS pearldata.csv"
    };
    res.render('ONCHOCERCA_CERVIPEDIS', renderObj);
});

// Grab data from document
routerONCHOCERCA_CERVIPEDIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerONCHOCERCA_CERVIPEDIS;
