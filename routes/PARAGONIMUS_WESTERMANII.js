var express = require('express');
var routerPARAGONIMUS_WESTERMANII = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerPARAGONIMUS_WESTERMANII.get('/', function(req, res) {

    var renderObj = {
        title: "Paragonimus westermanii",
        currMap: "pdf/web/viewer.html?file=species-pages/PARAGONIMUS_WESTERMANII/PARAGONIMUS WESTERMANII current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/PARAGONIMUS_WESTERMANII/future-maps/future.pdf",
        url: "/PARAGONIMUS_WESTERMANII",
        urlCSV: "pdf/web/species-pages/PARAGONIMUS_WESTERMANII/PARAGONIMUS WESTERMANII pearldata.csv"
    };
    res.render('PARAGONIMUS_WESTERMANII', renderObj);
});

// Grab data from document
routerPARAGONIMUS_WESTERMANII.post('/', function(req, res) {

    res.end();
});

module.exports = routerPARAGONIMUS_WESTERMANII;
