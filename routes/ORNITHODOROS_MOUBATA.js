var express = require('express');
var routerORNITHODOROS_MOUBATA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerORNITHODOROS_MOUBATA.get('/', function(req, res) {

    var renderObj = {
        title: "Ornithodoros moubata",
        currMap: "pdf/web/viewer.html?file=species-pages/ORNITHODOROS_MOUBATA/ORNITHODOROS MOUBATA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/ORNITHODOROS_MOUBATA/future-maps/future.pdf",
        url: "/ORNITHODOROS_MOUBATA",
        urlCSV: "pdf/web/species-pages/ORNITHODOROS_MOUBATA/ORNITHODOROS MOUBATA pearldata.csv"
    };
    res.render('ORNITHODOROS_MOUBATA', renderObj);
});

// Grab data from document
routerORNITHODOROS_MOUBATA.post('/', function(req, res) {

    res.end();
});

module.exports = routerORNITHODOROS_MOUBATA;
