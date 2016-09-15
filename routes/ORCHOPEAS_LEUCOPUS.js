var express = require('express');
var routerORCHOPEAS_LEUCOPUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerORCHOPEAS_LEUCOPUS.get('/', function(req, res) {

    var renderObj = {
        title: "Orchopeas leucopus",
        currMap: "pdf/web/viewer.html?file=species-pages/ORCHOPEAS_LEUCOPUS/ORCHOPEAS LEUCOPUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/ORCHOPEAS_LEUCOPUS/future-maps/future.pdf",
        url: "/ORCHOPEAS_LEUCOPUS",
        urlCSV: "pdf/web/species-pages/ORCHOPEAS_LEUCOPUS/ORCHOPEAS LEUCOPUS pearldata.csv"
    };
    res.render('ORCHOPEAS_LEUCOPUS', renderObj);
});

// Grab data from document
routerORCHOPEAS_LEUCOPUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerORCHOPEAS_LEUCOPUS;
