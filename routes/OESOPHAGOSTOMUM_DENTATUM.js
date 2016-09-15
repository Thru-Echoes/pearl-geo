var express = require('express');
var routerOESOPHAGOSTOMUM_DENTATUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerOESOPHAGOSTOMUM_DENTATUM.get('/', function(req, res) {

    var renderObj = {
        title: "Oesophagostomum dentatum",
        currMap: "pdf/web/viewer.html?file=species-pages/OESOPHAGOSTOMUM_DENTATUM/OESOPHAGOSTOMUM DENTATUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/OESOPHAGOSTOMUM_DENTATUM/future-maps/future.pdf",
        url: "/OESOPHAGOSTOMUM_DENTATUM",
        urlCSV: "pdf/web/species-pages/OESOPHAGOSTOMUM_DENTATUM/OESOPHAGOSTOMUM DENTATUM pearldata.csv"
    };
    res.render('OESOPHAGOSTOMUM_DENTATUM', renderObj);
});

// Grab data from document
routerOESOPHAGOSTOMUM_DENTATUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerOESOPHAGOSTOMUM_DENTATUM;
