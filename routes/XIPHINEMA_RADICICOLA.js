var express = require('express');
var routerXIPHINEMA_RADICICOLA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerXIPHINEMA_RADICICOLA.get('/', function(req, res) {

    var renderObj = {
        title: "Xiphinema radicicola",
        currMap: "pdf/web/viewer.html?file=species-pages/XIPHINEMA_RADICICOLA/XIPHINEMA RADICICOLA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/XIPHINEMA_RADICICOLA/future-maps/future.pdf",
        url: "/XIPHINEMA_RADICICOLA",
        urlCSV: "pdf/web/species-pages/XIPHINEMA_RADICICOLA/XIPHINEMA RADICICOLA pearldata.csv"
    };
    res.render('XIPHINEMA_RADICICOLA', renderObj);
});

// Grab data from document
routerXIPHINEMA_RADICICOLA.post('/', function(req, res) {

    res.end();
});

module.exports = routerXIPHINEMA_RADICICOLA;
