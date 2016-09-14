var express = require('express');
var routerHABRONEMA_MUSCAE = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerHABRONEMA_MUSCAE.get('/', function(req, res) {

    var renderObj = {
        title: "Habronema muscae",
        currMap: "pdf/web/viewer.html?file=species-pages/HABRONEMA_MUSCAE/HABRONEMA MUSCAE current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/HABRONEMA_MUSCAE/future-maps/future.pdf",
        url: "/HABRONEMA_MUSCAE",
        urlCSV: "pdf/web/species-pages/HABRONEMA_MUSCAE/HABRONEMA MUSCAE pearldata.csv"
    };
    res.render('HABRONEMA_MUSCAE', renderObj);
});

// Grab data from document
routerHABRONEMA_MUSCAE.post('/', function(req, res) {

    res.end();
});

module.exports = routerHABRONEMA_MUSCAE;
