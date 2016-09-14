var express = require('express');
var routerDERMACENTOR_OCCIDENTALIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerDERMACENTOR_OCCIDENTALIS.get('/', function(req, res) {

    var renderObj = {
        title: "Dermacentor occidentalis",
        currMap: "pdf/web/viewer.html?file=species-pages/DERMACENTOR_OCCIDENTALIS/DERMACENTOR OCCIDENTALIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/DERMACENTOR_OCCIDENTALIS/future-maps/future.pdf",
        url: "/DERMACENTOR_OCCIDENTALIS",
        urlCSV: "pdf/web/species-pages/DERMACENTOR_OCCIDENTALIS/DERMACENTOR OCCIDENTALIS pearldata.csv"
    };
    res.render('DERMACENTOR_OCCIDENTALIS', renderObj);
});

// Grab data from document
routerDERMACENTOR_OCCIDENTALIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerDERMACENTOR_OCCIDENTALIS;
