var express = require('express');
var routerDERMACENTOR_RHINOCERINUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerDERMACENTOR_RHINOCERINUS.get('/', function(req, res) {

    var renderObj = {
        title: "Dermacentor rhinocerinus",
        currMap: "pdf/web/viewer.html?file=species-pages/DERMACENTOR_RHINOCERINUS/DERMACENTOR RHINOCERINUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/DERMACENTOR_RHINOCERINUS/future-maps/future.pdf",
        url: "/DERMACENTOR_RHINOCERINUS",
        urlCSV: "pdf/web/species-pages/DERMACENTOR_RHINOCERINUS/DERMACENTOR RHINOCERINUS pearldata.csv"
    };
    res.render('DERMACENTOR_RHINOCERINUS', renderObj);
});

// Grab data from document
routerDERMACENTOR_RHINOCERINUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerDERMACENTOR_RHINOCERINUS;
