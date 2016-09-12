var express = require('express');
var routerIXODES_RASUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerIXODES_RASUS.get('/', function(req, res) {

    var renderObj = {
        title: "Ixodes rasus",
        currMap: "pdf/web/viewer.html?file=species-pages/IXODES_RASUS/IXODES RASUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/IXODES_RASUS/future-maps/future.pdf",
        url: "/IXODES_RASUS",
        urlCSV: "pdf/web/species-pages/IXODES_RASUS/IXODES RASUS pearldata.csv"
    };
    res.render('IXODES_RASUS', renderObj);
});

// Grab data from document
routerIXODES_RASUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerIXODES_RASUS;
