var express = require('express');
var routerOPHIDASCARIS_ROBERTSI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerOPHIDASCARIS_ROBERTSI.get('/', function(req, res) {

    var renderObj = {
        title: "Ophidascaris robertsi",
        currMap: "pdf/web/viewer.html?file=species-pages/OPHIDASCARIS_ROBERTSI/OPHIDASCARIS ROBERTSI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/OPHIDASCARIS_ROBERTSI/future-maps/future.pdf",
        url: "/OPHIDASCARIS_ROBERTSI",
        urlCSV: "pdf/web/species-pages/OPHIDASCARIS_ROBERTSI/OPHIDASCARIS ROBERTSI pearldata.csv"
    };
    res.render('OPHIDASCARIS_ROBERTSI', renderObj);
});

// Grab data from document
routerOPHIDASCARIS_ROBERTSI.post('/', function(req, res) {

    res.end();
});

module.exports = routerOPHIDASCARIS_ROBERTSI;
