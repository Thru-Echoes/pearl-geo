var express = require('express');
var routerHAEMATOPINUS_EURYSTERNUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerHAEMATOPINUS_EURYSTERNUS.get('/', function(req, res) {

    var renderObj = {
        title: "Haematopinus eurysternus",
        currMap: "pdf/web/viewer.html?file=species-pages/HAEMATOPINUS_EURYSTERNUS/HAEMATOPINUS EURYSTERNUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/HAEMATOPINUS_EURYSTERNUS/future-maps/future.pdf",
        url: "/HAEMATOPINUS_EURYSTERNUS",
        urlCSV: "pdf/web/species-pages/HAEMATOPINUS_EURYSTERNUS/HAEMATOPINUS EURYSTERNUS pearldata.csv"
    };
    res.render('HAEMATOPINUS_EURYSTERNUS', renderObj);
});

// Grab data from document
routerHAEMATOPINUS_EURYSTERNUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerHAEMATOPINUS_EURYSTERNUS;
