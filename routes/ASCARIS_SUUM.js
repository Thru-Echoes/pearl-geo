var express = require('express');
var routerASCARIS_SUUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerASCARIS_SUUM.get('/', function(req, res) {

    var renderObj = {
        title: "Ascaris suum",
        currMap: "pdf/web/viewer.html?file=species-pages/ASCARIS_SUUM/ASCARIS SUUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/ASCARIS_SUUM/future-maps/future.pdf",
        url: "/ASCARIS_SUUM",
        urlCSV: "pdf/web/species-pages/ASCARIS_SUUM/ASCARIS SUUM pearldata.csv"
    };
    res.render('ASCARIS_SUUM', renderObj);
});

// Grab data from document
routerASCARIS_SUUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerASCARIS_SUUM;
