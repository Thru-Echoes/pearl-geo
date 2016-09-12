var express = require('express');
var routerIXODES_FRONTALIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerIXODES_FRONTALIS.get('/', function(req, res) {

    var renderObj = {
        title: "Ixodes frontalis",
        currMap: "pdf/web/viewer.html?file=species-pages/IXODES_FRONTALIS/IXODES FRONTALIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/IXODES_FRONTALIS/future-maps/future.pdf",
        url: "/IXODES_FRONTALIS",
        urlCSV: "pdf/web/species-pages/IXODES_FRONTALIS/IXODES FRONTALIS pearldata.csv"
    };
    res.render('IXODES_FRONTALIS', renderObj);
});

// Grab data from document
routerIXODES_FRONTALIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerIXODES_FRONTALIS;
