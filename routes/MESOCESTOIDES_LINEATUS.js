var express = require('express');
var routerMESOCESTOIDES_LINEATUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerMESOCESTOIDES_LINEATUS.get('/', function(req, res) {

    var renderObj = {
        title: "Mesocestoides lineatus",
        currMap: "pdf/web/viewer.html?file=species-pages/MESOCESTOIDES_LINEATUS/MESOCESTOIDES LINEATUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/MESOCESTOIDES_LINEATUS/future-maps/future.pdf",
        url: "/MESOCESTOIDES_LINEATUS",
        urlCSV: "pdf/web/species-pages/MESOCESTOIDES_LINEATUS/MESOCESTOIDES LINEATUS pearldata.csv"
    };
    res.render('MESOCESTOIDES_LINEATUS', renderObj);
});

// Grab data from document
routerMESOCESTOIDES_LINEATUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerMESOCESTOIDES_LINEATUS;
