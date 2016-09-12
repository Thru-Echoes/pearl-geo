var express = require('express');
var routerIXODES_MUNIENSIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerIXODES_MUNIENSIS.get('/', function(req, res) {

    var renderObj = {
        title: "Ixodes muniensis",
        currMap: "pdf/web/viewer.html?file=species-pages/IXODES_MUNIENSIS/IXODES MUNIENSIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/IXODES_MUNIENSIS/future-maps/future.pdf",
        url: "/IXODES_MUNIENSIS",
        urlCSV: "pdf/web/species-pages/IXODES_MUNIENSIS/IXODES MUNIENSIS pearldata.csv"
    };
    res.render('IXODES_MUNIENSIS', renderObj);
});

// Grab data from document
routerIXODES_MUNIENSIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerIXODES_MUNIENSIS;
