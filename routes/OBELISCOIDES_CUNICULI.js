var express = require('express');
var routerOBELISCOIDES_CUNICULI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerOBELISCOIDES_CUNICULI.get('/', function(req, res) {

    var renderObj = {
        title: "Obeliscoides cuniculi",
        currMap: "pdf/web/viewer.html?file=species-pages/OBELISCOIDES_CUNICULI/OBELISCOIDES CUNICULI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/OBELISCOIDES_CUNICULI/future-maps/future.pdf",
        url: "/OBELISCOIDES_CUNICULI",
        urlCSV: "pdf/web/species-pages/OBELISCOIDES_CUNICULI/OBELISCOIDES CUNICULI pearldata.csv"
    };
    res.render('OBELISCOIDES_CUNICULI', renderObj);
});

// Grab data from document
routerOBELISCOIDES_CUNICULI.post('/', function(req, res) {

    res.end();
});

module.exports = routerOBELISCOIDES_CUNICULI;
