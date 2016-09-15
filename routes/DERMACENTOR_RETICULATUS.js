var express = require('express');
var routerDERMACENTOR_RETICULATUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerDERMACENTOR_RETICULATUS.get('/', function(req, res) {

    var renderObj = {
        title: "Dermacentor reticulatus",
        currMap: "pdf/web/viewer.html?file=species-pages/DERMACENTOR_RETICULATUS/DERMACENTOR RETICULATUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/DERMACENTOR_RETICULATUS/future-maps/future.pdf",
        url: "/DERMACENTOR_RETICULATUS",
        urlCSV: "pdf/web/species-pages/DERMACENTOR_RETICULATUS/DERMACENTOR RETICULATUS pearldata.csv"
    };
    res.render('DERMACENTOR_RETICULATUS', renderObj);
});

// Grab data from document
routerDERMACENTOR_RETICULATUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerDERMACENTOR_RETICULATUS;
