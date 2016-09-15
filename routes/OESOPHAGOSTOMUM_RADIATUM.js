var express = require('express');
var routerOESOPHAGOSTOMUM_RADIATUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerOESOPHAGOSTOMUM_RADIATUM.get('/', function(req, res) {

    var renderObj = {
        title: "Oesophagostomum radiatum",
        currMap: "pdf/web/viewer.html?file=species-pages/OESOPHAGOSTOMUM_RADIATUM/OESOPHAGOSTOMUM RADIATUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/OESOPHAGOSTOMUM_RADIATUM/future-maps/future.pdf",
        url: "/OESOPHAGOSTOMUM_RADIATUM",
        urlCSV: "pdf/web/species-pages/OESOPHAGOSTOMUM_RADIATUM/OESOPHAGOSTOMUM RADIATUM pearldata.csv"
    };
    res.render('OESOPHAGOSTOMUM_RADIATUM', renderObj);
});

// Grab data from document
routerOESOPHAGOSTOMUM_RADIATUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerOESOPHAGOSTOMUM_RADIATUM;
