var express = require('express');
var routerANOMIOPSYLLUS_NUDATUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerANOMIOPSYLLUS_NUDATUS.get('/', function(req, res) {

    var renderObj = {
        title: "Anomiopsyllus nudatus",
        currMap: "pdf/web/viewer.html?file=species-pages/ANOMIOPSYLLUS_NUDATUS/ANOMIOPSYLLUS NUDATUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/ANOMIOPSYLLUS_NUDATUS/future-maps/future.pdf",
        url: "/ANOMIOPSYLLUS_NUDATUS",
        urlCSV: "pdf/web/species-pages/ANOMIOPSYLLUS_NUDATUS/ANOMIOPSYLLUS NUDATUS pearldata.csv"
    };
    res.render('ANOMIOPSYLLUS_NUDATUS', renderObj);
});

// Grab data from document
routerANOMIOPSYLLUS_NUDATUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerANOMIOPSYLLUS_NUDATUS;
