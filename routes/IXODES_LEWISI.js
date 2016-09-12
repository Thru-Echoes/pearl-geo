var express = require('express');
var routerIXODES_LEWISI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerIXODES_LEWISI.get('/', function(req, res) {

    var renderObj = {
        title: "Ixodes lewisi",
        currMap: "pdf/web/viewer.html?file=species-pages/IXODES_LEWISI/IXODES LEWISI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/IXODES_LEWISI/future-maps/future.pdf",
        url: "/IXODES_LEWISI",
        urlCSV: "pdf/web/species-pages/IXODES_LEWISI/IXODES LEWISI pearldata.csv"
    };
    res.render('IXODES_LEWISI', renderObj);
});

// Grab data from document
routerIXODES_LEWISI.post('/', function(req, res) {

    res.end();
});

module.exports = routerIXODES_LEWISI;
