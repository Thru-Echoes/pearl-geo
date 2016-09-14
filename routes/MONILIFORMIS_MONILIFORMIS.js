var express = require('express');
var routerMONILIFORMIS_MONILIFORMIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerMONILIFORMIS_MONILIFORMIS.get('/', function(req, res) {

    var renderObj = {
        title: "Moniliformis moniliformis",
        currMap: "pdf/web/viewer.html?file=species-pages/MONILIFORMIS_MONILIFORMIS/MONILIFORMIS MONILIFORMIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/MONILIFORMIS_MONILIFORMIS/future-maps/future.pdf",
        url: "/MONILIFORMIS_MONILIFORMIS",
        urlCSV: "pdf/web/species-pages/MONILIFORMIS_MONILIFORMIS/MONILIFORMIS MONILIFORMIS pearldata.csv"
    };
    res.render('MONILIFORMIS_MONILIFORMIS', renderObj);
});

// Grab data from document
routerMONILIFORMIS_MONILIFORMIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerMONILIFORMIS_MONILIFORMIS;
