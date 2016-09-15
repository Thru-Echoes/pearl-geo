var express = require('express');
var routerORCHOPEAS_HOWARDI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerORCHOPEAS_HOWARDI.get('/', function(req, res) {

    var renderObj = {
        title: "Orchopeas howardi",
        currMap: "pdf/web/viewer.html?file=species-pages/ORCHOPEAS_HOWARDI/ORCHOPEAS HOWARDI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/ORCHOPEAS_HOWARDI/future-maps/future.pdf",
        url: "/ORCHOPEAS_HOWARDI",
        urlCSV: "pdf/web/species-pages/ORCHOPEAS_HOWARDI/ORCHOPEAS HOWARDI pearldata.csv"
    };
    res.render('ORCHOPEAS_HOWARDI', renderObj);
});

// Grab data from document
routerORCHOPEAS_HOWARDI.post('/', function(req, res) {

    res.end();
});

module.exports = routerORCHOPEAS_HOWARDI;
