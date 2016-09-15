var express = require('express');
var routerHAEMONCHUS_PLACEI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerHAEMONCHUS_PLACEI.get('/', function(req, res) {

    var renderObj = {
        title: "Haemonchus placei",
        currMap: "pdf/web/viewer.html?file=species-pages/HAEMONCHUS_PLACEI/HAEMONCHUS PLACEI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/HAEMONCHUS_PLACEI/future-maps/future.pdf",
        url: "/HAEMONCHUS_PLACEI",
        urlCSV: "pdf/web/species-pages/HAEMONCHUS_PLACEI/HAEMONCHUS PLACEI pearldata.csv"
    };
    res.render('HAEMONCHUS_PLACEI', renderObj);
});

// Grab data from document
routerHAEMONCHUS_PLACEI.post('/', function(req, res) {

    res.end();
});

module.exports = routerHAEMONCHUS_PLACEI;
