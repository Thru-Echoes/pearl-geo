var express = require('express');
var routerFALCULIFER_ROSTRATUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerFALCULIFER_ROSTRATUS.get('/', function(req, res) {

    var renderObj = {
        title: "Falculifer rostratus",
        currMap: "pdf/web/viewer.html?file=species-pages/FALCULIFER_ROSTRATUS/FALCULIFER ROSTRATUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/FALCULIFER_ROSTRATUS/future-maps/future.pdf",
        url: "/FALCULIFER_ROSTRATUS",
        urlCSV: "pdf/web/species-pages/FALCULIFER_ROSTRATUS/FALCULIFER ROSTRATUS pearldata.csv"
    };
    res.render('FALCULIFER_ROSTRATUS', renderObj);
});

// Grab data from document
routerFALCULIFER_ROSTRATUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerFALCULIFER_ROSTRATUS;
