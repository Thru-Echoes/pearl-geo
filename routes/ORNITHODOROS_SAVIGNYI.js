var express = require('express');
var routerORNITHODOROS_SAVIGNYI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerORNITHODOROS_SAVIGNYI.get('/', function(req, res) {

    var renderObj = {
        title: "Ornithodoros savignyi",
        currMap: "pdf/web/viewer.html?file=species-pages/ORNITHODOROS_SAVIGNYI/ORNITHODOROS SAVIGNYI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/ORNITHODOROS_SAVIGNYI/future-maps/future.pdf",
        url: "/ORNITHODOROS_SAVIGNYI",
        urlCSV: "pdf/web/species-pages/ORNITHODOROS_SAVIGNYI/ORNITHODOROS SAVIGNYI pearldata.csv"
    };
    res.render('ORNITHODOROS_SAVIGNYI', renderObj);
});

// Grab data from document
routerORNITHODOROS_SAVIGNYI.post('/', function(req, res) {

    res.end();
});

module.exports = routerORNITHODOROS_SAVIGNYI;
