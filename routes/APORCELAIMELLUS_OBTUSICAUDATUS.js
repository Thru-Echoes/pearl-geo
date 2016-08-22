var express = require('express');
var routerAPORCELAIMELLUS_OBTUSICAUDATUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAPORCELAIMELLUS_OBTUSICAUDATUS.get('/', function(req, res) {

    var renderObj = {
        title: "Aporcelaimellus obtusicaudatus",
        currMap: "pdf/web/viewer.html?file=species-pages/APORCELAIMELLUS_OBTUSICAUDATUS/APORCELAIMELLUS OBTUSICAUDATUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/APORCELAIMELLUS_OBTUSICAUDATUS/future-maps/future.pdf",
        url: "/APORCELAIMELLUS_OBTUSICAUDATUS",
        urlCSV: "pdf/web/species-pages/APORCELAIMELLUS_OBTUSICAUDATUS/APORCELAIMELLUS OBTUSICAUDATUS pearldata.csv"
    };
    res.render('APORCELAIMELLUS_OBTUSICAUDATUS', renderObj);
});

// Grab data from document
routerAPORCELAIMELLUS_OBTUSICAUDATUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerAPORCELAIMELLUS_OBTUSICAUDATUS;
