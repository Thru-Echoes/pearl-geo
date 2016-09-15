var express = require('express');
var routerOESOPHAGOSTOMUM_VENULOSUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerOESOPHAGOSTOMUM_VENULOSUM.get('/', function(req, res) {

    var renderObj = {
        title: "Oesophagostomum venulosum",
        currMap: "pdf/web/viewer.html?file=species-pages/OESOPHAGOSTOMUM_VENULOSUM/OESOPHAGOSTOMUM VENULOSUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/OESOPHAGOSTOMUM_VENULOSUM/future-maps/future.pdf",
        url: "/OESOPHAGOSTOMUM_VENULOSUM",
        urlCSV: "pdf/web/species-pages/OESOPHAGOSTOMUM_VENULOSUM/OESOPHAGOSTOMUM VENULOSUM pearldata.csv"
    };
    res.render('OESOPHAGOSTOMUM_VENULOSUM', renderObj);
});

// Grab data from document
routerOESOPHAGOSTOMUM_VENULOSUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerOESOPHAGOSTOMUM_VENULOSUM;
