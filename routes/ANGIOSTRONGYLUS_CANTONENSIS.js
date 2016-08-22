var express = require('express');
var routerANGIOSTRONGYLUS_CANTONENSIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerANGIOSTRONGYLUS_CANTONENSIS.get('/', function(req, res) {

    var renderObj = {
        title: "Angiostrongylus cantonensis",
        currMap: "pdf/web/viewer.html?file=species-pages/ANGIOSTRONGYLUS_CANTONENSIS/ANGIOSTRONGYLUS CANTONENSIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/ANGIOSTRONGYLUS_CANTONENSIS/future-maps/future.pdf",
        url: "/ANGIOSTRONGYLUS_CANTONENSIS",
        urlCSV: "pdf/web/species-pages/ANGIOSTRONGYLUS_CANTONENSIS/ANGIOSTRONGYLUS CANTONENSIS pearldata.csv"
    };
    res.render('ANGIOSTRONGYLUS_CANTONENSIS', renderObj);
});

// Grab data from document
routerANGIOSTRONGYLUS_CANTONENSIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerANGIOSTRONGYLUS_CANTONENSIS;
