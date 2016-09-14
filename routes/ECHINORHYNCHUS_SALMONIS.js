var express = require('express');
var routerECHINORHYNCHUS_SALMONIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerECHINORHYNCHUS_SALMONIS.get('/', function(req, res) {

    var renderObj = {
        title: "Echinorhynchus salmonis",
        currMap: "pdf/web/viewer.html?file=species-pages/ECHINORHYNCHUS_SALMONIS/ECHINORHYNCHUS SALMONIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/ECHINORHYNCHUS_SALMONIS/future-maps/future.pdf",
        url: "/ECHINORHYNCHUS_SALMONIS",
        urlCSV: "pdf/web/species-pages/ECHINORHYNCHUS_SALMONIS/ECHINORHYNCHUS SALMONIS pearldata.csv"
    };
    res.render('ECHINORHYNCHUS_SALMONIS', renderObj);
});

// Grab data from document
routerECHINORHYNCHUS_SALMONIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerECHINORHYNCHUS_SALMONIS;
