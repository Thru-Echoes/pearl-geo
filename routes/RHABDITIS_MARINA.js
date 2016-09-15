var express = require('express');
var routerRHABDITIS_MARINA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHABDITIS_MARINA.get('/', function(req, res) {

    var renderObj = {
        title: "Rhabditis marina",
        currMap: "pdf/web/viewer.html?file=species-pages/RHABDITIS_MARINA/RHABDITIS MARINA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHABDITIS_MARINA/future-maps/future.pdf",
        url: "/RHABDITIS_MARINA",
        urlCSV: "pdf/web/species-pages/RHABDITIS_MARINA/RHABDITIS MARINA pearldata.csv"
    };
    res.render('RHABDITIS_MARINA', renderObj);
});

// Grab data from document
routerRHABDITIS_MARINA.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHABDITIS_MARINA;
