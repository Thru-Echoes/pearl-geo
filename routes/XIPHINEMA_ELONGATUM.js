var express = require('express');
var routerXIPHINEMA_ELONGATUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerXIPHINEMA_ELONGATUM.get('/', function(req, res) {

    var renderObj = {
        title: "Xiphinema elongatum",
        currMap: "pdf/web/viewer.html?file=species-pages/XIPHINEMA_ELONGATUM/XIPHINEMA ELONGATUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/XIPHINEMA_ELONGATUM/future-maps/future.pdf",
        url: "/XIPHINEMA_ELONGATUM",
        urlCSV: "pdf/web/species-pages/XIPHINEMA_ELONGATUM/XIPHINEMA ELONGATUM pearldata.csv"
    };
    res.render('XIPHINEMA_ELONGATUM', renderObj);
});

// Grab data from document
routerXIPHINEMA_ELONGATUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerXIPHINEMA_ELONGATUM;
