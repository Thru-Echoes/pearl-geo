var express = require('express');
var routerGONGYLONEMA_PULCHRUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerGONGYLONEMA_PULCHRUM.get('/', function(req, res) {

    var renderObj = {
        title: "Gongylonema pulchrum",
        currMap: "pdf/web/viewer.html?file=species-pages/GONGYLONEMA_PULCHRUM/GONGYLONEMA PULCHRUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/GONGYLONEMA_PULCHRUM/future-maps/future.pdf",
        url: "/GONGYLONEMA_PULCHRUM",
        urlCSV: "pdf/web/species-pages/GONGYLONEMA_PULCHRUM/GONGYLONEMA PULCHRUM pearldata.csv"
    };
    res.render('GONGYLONEMA_PULCHRUM', renderObj);
});

// Grab data from document
routerGONGYLONEMA_PULCHRUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerGONGYLONEMA_PULCHRUM;
