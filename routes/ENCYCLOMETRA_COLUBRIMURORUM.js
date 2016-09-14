var express = require('express');
var routerENCYCLOMETRA_COLUBRIMURORUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerENCYCLOMETRA_COLUBRIMURORUM.get('/', function(req, res) {

    var renderObj = {
        title: "Encyclometra colubrimurorum",
        currMap: "pdf/web/viewer.html?file=species-pages/ENCYCLOMETRA_COLUBRIMURORUM/ENCYCLOMETRA COLUBRIMURORUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/ENCYCLOMETRA_COLUBRIMURORUM/future-maps/future.pdf",
        url: "/ENCYCLOMETRA_COLUBRIMURORUM",
        urlCSV: "pdf/web/species-pages/ENCYCLOMETRA_COLUBRIMURORUM/ENCYCLOMETRA COLUBRIMURORUM pearldata.csv"
    };
    res.render('ENCYCLOMETRA_COLUBRIMURORUM', renderObj);
});

// Grab data from document
routerENCYCLOMETRA_COLUBRIMURORUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerENCYCLOMETRA_COLUBRIMURORUM;
