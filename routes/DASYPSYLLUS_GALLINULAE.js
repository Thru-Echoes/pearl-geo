var express = require('express');
var routerDASYPSYLLUS_GALLINULAE = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerDASYPSYLLUS_GALLINULAE.get('/', function(req, res) {

    var renderObj = {
        title: "Dasypsyllus gallinulae",
        currMap: "pdf/web/viewer.html?file=species-pages/DASYPSYLLUS_GALLINULAE/DASYPSYLLUS GALLINULAE current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/DASYPSYLLUS_GALLINULAE/future-maps/future.pdf",
        url: "/DASYPSYLLUS_GALLINULAE",
        urlCSV: "pdf/web/species-pages/DASYPSYLLUS_GALLINULAE/DASYPSYLLUS GALLINULAE pearldata.csv"
    };
    res.render('DASYPSYLLUS_GALLINULAE', renderObj);
});

// Grab data from document
routerDASYPSYLLUS_GALLINULAE.post('/', function(req, res) {

    res.end();
});

module.exports = routerDASYPSYLLUS_GALLINULAE;
