var express = require('express');
var routerMARSHALLAGIA_MARSHALLI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerMARSHALLAGIA_MARSHALLI.get('/', function(req, res) {

    var renderObj = {
        title: "Marshallagia marshalli",
        currMap: "pdf/web/viewer.html?file=species-pages/MARSHALLAGIA_MARSHALLI/MARSHALLAGIA MARSHALLI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/MARSHALLAGIA_MARSHALLI/future-maps/future.pdf",
        url: "/MARSHALLAGIA_MARSHALLI",
        urlCSV: "pdf/web/species-pages/MARSHALLAGIA_MARSHALLI/MARSHALLAGIA MARSHALLI pearldata.csv"
    };
    res.render('MARSHALLAGIA_MARSHALLI', renderObj);
});

// Grab data from document
routerMARSHALLAGIA_MARSHALLI.post('/', function(req, res) {

    res.end();
});

module.exports = routerMARSHALLAGIA_MARSHALLI;
