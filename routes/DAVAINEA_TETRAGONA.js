var express = require('express');
var routerDAVAINEA_TETRAGONA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerDAVAINEA_TETRAGONA.get('/', function(req, res) {

    var renderObj = {
        title: "Davainea tetragona",
        currMap: "pdf/web/viewer.html?file=species-pages/DAVAINEA_TETRAGONA/DAVAINEA TETRAGONA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/DAVAINEA_TETRAGONA/future-maps/future.pdf",
        url: "/DAVAINEA_TETRAGONA",
        urlCSV: "pdf/web/species-pages/DAVAINEA_TETRAGONA/DAVAINEA TETRAGONA pearldata.csv"
    };
    res.render('DAVAINEA_TETRAGONA', renderObj);
});

// Grab data from document
routerDAVAINEA_TETRAGONA.post('/', function(req, res) {

    res.end();
});

module.exports = routerDAVAINEA_TETRAGONA;
