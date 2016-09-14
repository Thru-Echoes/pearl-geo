var express = require('express');
var routerDISPHARYNX_SPIRALIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerDISPHARYNX_SPIRALIS.get('/', function(req, res) {

    var renderObj = {
        title: "Dispharynx spiralis",
        currMap: "pdf/web/viewer.html?file=species-pages/DISPHARYNX_SPIRALIS/DISPHARYNX SPIRALIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/DISPHARYNX_SPIRALIS/future-maps/future.pdf",
        url: "/DISPHARYNX_SPIRALIS",
        urlCSV: "pdf/web/species-pages/DISPHARYNX_SPIRALIS/DISPHARYNX SPIRALIS pearldata.csv"
    };
    res.render('DISPHARYNX_SPIRALIS', renderObj);
});

// Grab data from document
routerDISPHARYNX_SPIRALIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerDISPHARYNX_SPIRALIS;
