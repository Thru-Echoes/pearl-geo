var express = require('express');
var routerDIROFILARIA_IMMITIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerDIROFILARIA_IMMITIS.get('/', function(req, res) {

    var renderObj = {
        title: "Dirofilaria immitis",
        currMap: "pdf/web/viewer.html?file=species-pages/DIROFILARIA_IMMITIS/DIROFILARIA IMMITIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/DIROFILARIA_IMMITIS/future-maps/future.pdf",
        url: "/DIROFILARIA_IMMITIS",
        urlCSV: "pdf/web/species-pages/DIROFILARIA_IMMITIS/DIROFILARIA IMMITIS pearldata.csv"
    };
    res.render('DIROFILARIA_IMMITIS', renderObj);
});

// Grab data from document
routerDIROFILARIA_IMMITIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerDIROFILARIA_IMMITIS;
