var express = require('express');
var routerOESOPHAGOSTOMUM_COLUMBIANUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerOESOPHAGOSTOMUM_COLUMBIANUM.get('/', function(req, res) {

    var renderObj = {
        title: "Oesophagostomum columbianum",
        currMap: "pdf/web/viewer.html?file=species-pages/OESOPHAGOSTOMUM_COLUMBIANUM/OESOPHAGOSTOMUM COLUMBIANUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/OESOPHAGOSTOMUM_COLUMBIANUM/future-maps/future.pdf",
        url: "/OESOPHAGOSTOMUM_COLUMBIANUM",
        urlCSV: "pdf/web/species-pages/OESOPHAGOSTOMUM_COLUMBIANUM/OESOPHAGOSTOMUM COLUMBIANUM pearldata.csv"
    };
    res.render('OESOPHAGOSTOMUM_COLUMBIANUM', renderObj);
});

// Grab data from document
routerOESOPHAGOSTOMUM_COLUMBIANUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerOESOPHAGOSTOMUM_COLUMBIANUM;
