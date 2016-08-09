var express = require('express');
var routerALLOGLOSSIDIUM_CORTI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerALLOGLOSSIDIUM_CORTI.get('/', function(req, res) {

    var renderObj = {
        title: "Alloglossidium Corti",
        clade: "Trematoda",
        source: "GBIF",
        currMap: "pdf/web/viewer.html?file=species-pages/ALLOGLOSSIDIUM_CORTI/ALLOGLOSSIDIUM CORTI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/ALLOGLOSSIDIUM_CORTI/future-maps/future.pdf",
        url: "/ALLOGLOSSIDIUM_CORTI",
        urlCSV: "pdf/web/species-pages/ALLOGLOSSIDIUM_CORTI/ALLOGLOSSIDIUM CORTI pearldata.csv"
    };
    res.render('ALLOGLOSSIDIUM_CORTI', renderObj);
});

// Grab data from document
routerALLOGLOSSIDIUM_CORTI.post('/', function(req, res) {

    res.end();
});

module.exports = routerALLOGLOSSIDIUM_CORTI;
