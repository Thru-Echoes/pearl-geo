var express = require('express');
var routerSTRONGYLUS_VULGARIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerSTRONGYLUS_VULGARIS.get('/', function(req, res) {

    var renderObj = {
        title: "Strongylus vulgaris",
        currMap: "pdf/web/viewer.html?file=species-pages/STRONGYLUS_VULGARIS/STRONGYLUS VULGARIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/STRONGYLUS_VULGARIS/future-maps/future.pdf",
        url: "/STRONGYLUS_VULGARIS",
        urlCSV: "pdf/web/species-pages/STRONGYLUS_VULGARIS/STRONGYLUS VULGARIS pearldata.csv"
    };
    res.render('STRONGYLUS_VULGARIS', renderObj);
});

// Grab data from document
routerSTRONGYLUS_VULGARIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerSTRONGYLUS_VULGARIS;
