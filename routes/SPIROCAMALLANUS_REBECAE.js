var express = require('express');
var routerSPIROCAMALLANUS_REBECAE = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerSPIROCAMALLANUS_REBECAE.get('/', function(req, res) {

    var renderObj = {
        title: "Spirocamallanus rebecae",
        currMap: "pdf/web/viewer.html?file=species-pages/SPIROCAMALLANUS_REBECAE/SPIROCAMALLANUS REBECAE current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/SPIROCAMALLANUS_REBECAE/future-maps/future.pdf",
        url: "/SPIROCAMALLANUS_REBECAE",
        urlCSV: "pdf/web/species-pages/SPIROCAMALLANUS_REBECAE/SPIROCAMALLANUS REBECAE pearldata.csv"
    };
    res.render('SPIROCAMALLANUS_REBECAE', renderObj);
});

// Grab data from document
routerSPIROCAMALLANUS_REBECAE.post('/', function(req, res) {

    res.end();
});

module.exports = routerSPIROCAMALLANUS_REBECAE;
