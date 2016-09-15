var express = require('express');
var routerORNITHODOROS_ERRATICUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerORNITHODOROS_ERRATICUS.get('/', function(req, res) {

    var renderObj = {
        title: "Ornithodoros erraticus",
        currMap: "pdf/web/viewer.html?file=species-pages/ORNITHODOROS_ERRATICUS/ORNITHODOROS ERRATICUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/ORNITHODOROS_ERRATICUS/future-maps/future.pdf",
        url: "/ORNITHODOROS_ERRATICUS",
        urlCSV: "pdf/web/species-pages/ORNITHODOROS_ERRATICUS/ORNITHODOROS ERRATICUS pearldata.csv"
    };
    res.render('ORNITHODOROS_ERRATICUS', renderObj);
});

// Grab data from document
routerORNITHODOROS_ERRATICUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerORNITHODOROS_ERRATICUS;
