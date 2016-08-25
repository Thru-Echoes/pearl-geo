var express = require('express');
var routerIRONUS_IGNAVUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerIRONUS_IGNAVUS.get('/', function(req, res) {

    var renderObj = {
        title: "Ironus ignavus",
        currMap: "pdf/web/viewer.html?file=species-pages/IRONUS_IGNAVUS/IRONUS IGNAVUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/IRONUS_IGNAVUS/future-maps/future.pdf",
        url: "/IRONUS_IGNAVUS",
        urlCSV: "pdf/web/species-pages/IRONUS_IGNAVUS/IRONUS IGNAVUS pearldata.csv"
    };
    res.render('IRONUS_IGNAVUS', renderObj);
});

// Grab data from document
routerIRONUS_IGNAVUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerIRONUS_IGNAVUS;
