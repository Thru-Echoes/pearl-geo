var express = require('express');
var routerASCARIS_LUMBRICOIDES = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerASCARIS_LUMBRICOIDES.get('/', function(req, res) {

    var renderObj = {
        title: "Ascaris lumbricoides",
        currMap: "pdf/web/viewer.html?file=species-pages/ASCARIS_LUMBRICOIDES/ASCARIS LUMBRICOIDES current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/ASCARIS_LUMBRICOIDES/future-maps/future.pdf",
        url: "/ASCARIS_LUMBRICOIDES",
        urlCSV: "pdf/web/species-pages/ASCARIS_LUMBRICOIDES/ASCARIS LUMBRICOIDES pearldata.csv"
    };
    res.render('ASCARIS_LUMBRICOIDES', renderObj);
});

// Grab data from document
routerASCARIS_LUMBRICOIDES.post('/', function(req, res) {

    res.end();
});

module.exports = routerASCARIS_LUMBRICOIDES;
