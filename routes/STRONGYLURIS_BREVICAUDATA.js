var express = require('express');
var routerSTRONGYLURIS_BREVICAUDATA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerSTRONGYLURIS_BREVICAUDATA.get('/', function(req, res) {

    var renderObj = {
        title: "Strongyluris brevicaudata",
        currMap: "pdf/web/viewer.html?file=species-pages/STRONGYLURIS_BREVICAUDATA/STRONGYLURIS BREVICAUDATA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/STRONGYLURIS_BREVICAUDATA/future-maps/future.pdf",
        url: "/STRONGYLURIS_BREVICAUDATA",
        urlCSV: "pdf/web/species-pages/STRONGYLURIS_BREVICAUDATA/STRONGYLURIS BREVICAUDATA pearldata.csv"
    };
    res.render('STRONGYLURIS_BREVICAUDATA', renderObj);
});

// Grab data from document
routerSTRONGYLURIS_BREVICAUDATA.post('/', function(req, res) {

    res.end();
});

module.exports = routerSTRONGYLURIS_BREVICAUDATA;
