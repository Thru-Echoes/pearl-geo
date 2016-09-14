var express = require('express');
var routerGONGYLONEMA_SCUTATUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerGONGYLONEMA_SCUTATUM.get('/', function(req, res) {

    var renderObj = {
        title: "Gongylonema scutatum",
        currMap: "pdf/web/viewer.html?file=species-pages/GONGYLONEMA_SCUTATUM/GONGYLONEMA SCUTATUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/GONGYLONEMA_SCUTATUM/future-maps/future.pdf",
        url: "/GONGYLONEMA_SCUTATUM",
        urlCSV: "pdf/web/species-pages/GONGYLONEMA_SCUTATUM/GONGYLONEMA SCUTATUM pearldata.csv"
    };
    res.render('GONGYLONEMA_SCUTATUM', renderObj);
});

// Grab data from document
routerGONGYLONEMA_SCUTATUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerGONGYLONEMA_SCUTATUM;
