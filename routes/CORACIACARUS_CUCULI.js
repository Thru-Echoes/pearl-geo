var express = require('express');
var routerCORACIACARUS_CUCULI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCORACIACARUS_CUCULI.get('/', function(req, res) {

    var renderObj = {
        title: "Coraciacarus cuculi",
        currMap: "pdf/web/viewer.html?file=species-pages/CORACIACARUS_CUCULI/CORACIACARUS CUCULI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/CORACIACARUS_CUCULI/future-maps/future.pdf",
        url: "/CORACIACARUS_CUCULI",
        urlCSV: "pdf/web/species-pages/CORACIACARUS_CUCULI/CORACIACARUS CUCULI pearldata.csv"
    };
    res.render('CORACIACARUS_CUCULI', renderObj);
});

// Grab data from document
routerCORACIACARUS_CUCULI.post('/', function(req, res) {

    res.end();
});

module.exports = routerCORACIACARUS_CUCULI;
