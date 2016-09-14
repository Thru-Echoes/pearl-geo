var express = require('express');
var routerDAVAINEA_CESTICILLUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerDAVAINEA_CESTICILLUS.get('/', function(req, res) {

    var renderObj = {
        title: "Davainea cesticillus",
        currMap: "pdf/web/viewer.html?file=species-pages/DAVAINEA_CESTICILLUS/DAVAINEA CESTICILLUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/DAVAINEA_CESTICILLUS/future-maps/future.pdf",
        url: "/DAVAINEA_CESTICILLUS",
        urlCSV: "pdf/web/species-pages/DAVAINEA_CESTICILLUS/DAVAINEA CESTICILLUS pearldata.csv"
    };
    res.render('DAVAINEA_CESTICILLUS', renderObj);
});

// Grab data from document
routerDAVAINEA_CESTICILLUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerDAVAINEA_CESTICILLUS;
