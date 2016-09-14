var express = require('express');
var routerGONGYLONEMA_NEOPLASTICUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerGONGYLONEMA_NEOPLASTICUM.get('/', function(req, res) {

    var renderObj = {
        title: "Gongylonema neoplasticum",
        currMap: "pdf/web/viewer.html?file=species-pages/GONGYLONEMA_NEOPLASTICUM/GONGYLONEMA NEOPLASTICUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/GONGYLONEMA_NEOPLASTICUM/future-maps/future.pdf",
        url: "/GONGYLONEMA_NEOPLASTICUM",
        urlCSV: "pdf/web/species-pages/GONGYLONEMA_NEOPLASTICUM/GONGYLONEMA NEOPLASTICUM pearldata.csv"
    };
    res.render('GONGYLONEMA_NEOPLASTICUM', renderObj);
});

// Grab data from document
routerGONGYLONEMA_NEOPLASTICUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerGONGYLONEMA_NEOPLASTICUM;
