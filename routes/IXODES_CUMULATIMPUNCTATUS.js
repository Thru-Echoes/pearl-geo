var express = require('express');
var routerIXODES_CUMULATIMPUNCTATUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerIXODES_CUMULATIMPUNCTATUS.get('/', function(req, res) {

    var renderObj = {
        title: "Ixodes cumulatimpunctatus",
        currMap: "pdf/web/viewer.html?file=species-pages/IXODES_CUMULATIMPUNCTATUS/IXODES CUMULATIMPUNCTATUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/IXODES_CUMULATIMPUNCTATUS/future-maps/future.pdf",
        url: "/IXODES_CUMULATIMPUNCTATUS",
        urlCSV: "pdf/web/species-pages/IXODES_CUMULATIMPUNCTATUS/IXODES CUMULATIMPUNCTATUS pearldata.csv"
    };
    res.render('IXODES_CUMULATIMPUNCTATUS', renderObj);
});

// Grab data from document
routerIXODES_CUMULATIMPUNCTATUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerIXODES_CUMULATIMPUNCTATUS;
