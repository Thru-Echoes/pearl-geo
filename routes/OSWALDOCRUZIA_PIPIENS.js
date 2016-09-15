var express = require('express');
var routerOSWALDOCRUZIA_PIPIENS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerOSWALDOCRUZIA_PIPIENS.get('/', function(req, res) {

    var renderObj = {
        title: "Oswaldocruzia pipiens",
        currMap: "pdf/web/viewer.html?file=species-pages/OSWALDOCRUZIA_PIPIENS/OSWALDOCRUZIA PIPIENS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/OSWALDOCRUZIA_PIPIENS/future-maps/future.pdf",
        url: "/OSWALDOCRUZIA_PIPIENS",
        urlCSV: "pdf/web/species-pages/OSWALDOCRUZIA_PIPIENS/OSWALDOCRUZIA PIPIENS pearldata.csv"
    };
    res.render('OSWALDOCRUZIA_PIPIENS', renderObj);
});

// Grab data from document
routerOSWALDOCRUZIA_PIPIENS.post('/', function(req, res) {

    res.end();
});

module.exports = routerOSWALDOCRUZIA_PIPIENS;
