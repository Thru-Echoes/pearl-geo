var express = require('express');
var routerIXODES_KINGI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerIXODES_KINGI.get('/', function(req, res) {

    var renderObj = {
        title: "Ixodes kingi",
        currMap: "pdf/web/viewer.html?file=species-pages/IXODES_KINGI/IXODES KINGI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/IXODES_KINGI/future-maps/future.pdf",
        url: "/IXODES_KINGI",
        urlCSV: "pdf/web/species-pages/IXODES_KINGI/IXODES KINGI pearldata.csv"
    };
    res.render('IXODES_KINGI', renderObj);
});

// Grab data from document
routerIXODES_KINGI.post('/', function(req, res) {

    res.end();
});

module.exports = routerIXODES_KINGI;
