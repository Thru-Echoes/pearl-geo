var express = require('express');
var routerGONGYLONEMA_VERRUCOSUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerGONGYLONEMA_VERRUCOSUM.get('/', function(req, res) {

    var renderObj = {
        title: "Gongylonema verrucosum",
        currMap: "pdf/web/viewer.html?file=species-pages/GONGYLONEMA_VERRUCOSUM/GONGYLONEMA VERRUCOSUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/GONGYLONEMA_VERRUCOSUM/future-maps/future.pdf",
        url: "/GONGYLONEMA_VERRUCOSUM",
        urlCSV: "pdf/web/species-pages/GONGYLONEMA_VERRUCOSUM/GONGYLONEMA VERRUCOSUM pearldata.csv"
    };
    res.render('GONGYLONEMA_VERRUCOSUM', renderObj);
});

// Grab data from document
routerGONGYLONEMA_VERRUCOSUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerGONGYLONEMA_VERRUCOSUM;
