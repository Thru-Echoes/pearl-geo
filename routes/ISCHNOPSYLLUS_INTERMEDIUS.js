var express = require('express');
var routerISCHNOPSYLLUS_INTERMEDIUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerISCHNOPSYLLUS_INTERMEDIUS.get('/', function(req, res) {

    var renderObj = {
        title: "Ischnopsyllus intermedius",
        currMap: "pdf/web/viewer.html?file=species-pages/ISCHNOPSYLLUS_INTERMEDIUS/ISCHNOPSYLLUS INTERMEDIUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/ISCHNOPSYLLUS_INTERMEDIUS/future-maps/future.pdf",
        url: "/ISCHNOPSYLLUS_INTERMEDIUS",
        urlCSV: "pdf/web/species-pages/ISCHNOPSYLLUS_INTERMEDIUS/ISCHNOPSYLLUS INTERMEDIUS pearldata.csv"
    };
    res.render('ISCHNOPSYLLUS_INTERMEDIUS', renderObj);
});

// Grab data from document
routerISCHNOPSYLLUS_INTERMEDIUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerISCHNOPSYLLUS_INTERMEDIUS;
