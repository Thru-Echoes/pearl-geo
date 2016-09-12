var express = require('express');
var routerIXODES_COOKEI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerIXODES_COOKEI.get('/', function(req, res) {

    var renderObj = {
        title: "Ixodes cookei",
        currMap: "pdf/web/viewer.html?file=species-pages/IXODES_COOKEI/IXODES COOKEI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/IXODES_COOKEI/future-maps/future.pdf",
        url: "/IXODES_COOKEI",
        urlCSV: "pdf/web/species-pages/IXODES_COOKEI/IXODES COOKEI pearldata.csv"
    };
    res.render('IXODES_COOKEI', renderObj);
});

// Grab data from document
routerIXODES_COOKEI.post('/', function(req, res) {

    res.end();
});

module.exports = routerIXODES_COOKEI;
