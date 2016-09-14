var express = require('express');
var routerSTRONGYLUS_EQUINUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerSTRONGYLUS_EQUINUS.get('/', function(req, res) {

    var renderObj = {
        title: "Strongylus equinus",
        currMap: "pdf/web/viewer.html?file=species-pages/STRONGYLUS_EQUINUS/STRONGYLUS EQUINUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/STRONGYLUS_EQUINUS/future-maps/future.pdf",
        url: "/STRONGYLUS_EQUINUS",
        urlCSV: "pdf/web/species-pages/STRONGYLUS_EQUINUS/STRONGYLUS EQUINUS pearldata.csv"
    };
    res.render('STRONGYLUS_EQUINUS', renderObj);
});

// Grab data from document
routerSTRONGYLUS_EQUINUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerSTRONGYLUS_EQUINUS;
