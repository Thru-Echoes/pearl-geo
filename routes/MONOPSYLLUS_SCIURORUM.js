var express = require('express');
var routerMONOPSYLLUS_SCIURORUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerMONOPSYLLUS_SCIURORUM.get('/', function(req, res) {

    var renderObj = {
        title: "Monopsyllus sciurorum",
        currMap: "pdf/web/viewer.html?file=species-pages/MONOPSYLLUS_SCIURORUM/MONOPSYLLUS SCIURORUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/MONOPSYLLUS_SCIURORUM/future-maps/future.pdf",
        url: "/MONOPSYLLUS_SCIURORUM",
        urlCSV: "pdf/web/species-pages/MONOPSYLLUS_SCIURORUM/MONOPSYLLUS SCIURORUM pearldata.csv"
    };
    res.render('MONOPSYLLUS_SCIURORUM', renderObj);
});

// Grab data from document
routerMONOPSYLLUS_SCIURORUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerMONOPSYLLUS_SCIURORUM;
