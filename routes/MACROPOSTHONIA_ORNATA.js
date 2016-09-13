var express = require('express');
var routerMACROPOSTHONIA_ORNATA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerMACROPOSTHONIA_ORNATA.get('/', function(req, res) {

    var renderObj = {
        title: "Macroposthonia ornata",
        currMap: "pdf/web/viewer.html?file=species-pages/MACROPOSTHONIA_ORNATA/MACROPOSTHONIA ORNATA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/MACROPOSTHONIA_ORNATA/future-maps/future.pdf",
        url: "/MACROPOSTHONIA_ORNATA",
        urlCSV: "pdf/web/species-pages/MACROPOSTHONIA_ORNATA/MACROPOSTHONIA ORNATA pearldata.csv"
    };
    res.render('MACROPOSTHONIA_ORNATA', renderObj);
});

// Grab data from document
routerMACROPOSTHONIA_ORNATA.post('/', function(req, res) {

    res.end();
});

module.exports = routerMACROPOSTHONIA_ORNATA;
