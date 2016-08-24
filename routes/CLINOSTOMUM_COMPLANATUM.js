var express = require('express');
var routerCLINOSTOMUM_COMPLANATUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCLINOSTOMUM_COMPLANATUM.get('/', function(req, res) {

    var renderObj = {
        title: "Clinostomum complanatum",
        currMap: "pdf/web/viewer.html?file=species-pages/CLINOSTOMUM_COMPLANATUM/CLINOSTOMUM COMPLANATUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/CLINOSTOMUM_COMPLANATUM/future-maps/future.pdf",
        url: "/CLINOSTOMUM_COMPLANATUM",
        urlCSV: "pdf/web/species-pages/CLINOSTOMUM_COMPLANATUM/CLINOSTOMUM COMPLANATUM pearldata.csv"
    };
    res.render('CLINOSTOMUM_COMPLANATUM', renderObj);
});

// Grab data from document
routerCLINOSTOMUM_COMPLANATUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerCLINOSTOMUM_COMPLANATUM;
