var express = require('express');
var routerDERMACENTOR_NITENS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerDERMACENTOR_NITENS.get('/', function(req, res) {

    var renderObj = {
        title: "Dermacentor nitens",
        currMap: "pdf/web/viewer.html?file=species-pages/DERMACENTOR_NITENS/DERMACENTOR NITENS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/DERMACENTOR_NITENS/future-maps/future.pdf",
        url: "/DERMACENTOR_NITENS",
        urlCSV: "pdf/web/species-pages/DERMACENTOR_NITENS/DERMACENTOR NITENS pearldata.csv"
    };
    res.render('DERMACENTOR_NITENS', renderObj);
});

// Grab data from document
routerDERMACENTOR_NITENS.post('/', function(req, res) {

    res.end();
});

module.exports = routerDERMACENTOR_NITENS;
