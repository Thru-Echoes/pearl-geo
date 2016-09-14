var express = require('express');
var routerMONHYSTERA_FILIFORMIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerMONHYSTERA_FILIFORMIS.get('/', function(req, res) {

    var renderObj = {
        title: "Monhystera filiformis",
        currMap: "pdf/web/viewer.html?file=species-pages/MONHYSTERA_FILIFORMIS/MONHYSTERA FILIFORMIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/MONHYSTERA_FILIFORMIS/future-maps/future.pdf",
        url: "/MONHYSTERA_FILIFORMIS",
        urlCSV: "pdf/web/species-pages/MONHYSTERA_FILIFORMIS/MONHYSTERA FILIFORMIS pearldata.csv"
    };
    res.render('MONHYSTERA_FILIFORMIS', renderObj);
});

// Grab data from document
routerMONHYSTERA_FILIFORMIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerMONHYSTERA_FILIFORMIS;
