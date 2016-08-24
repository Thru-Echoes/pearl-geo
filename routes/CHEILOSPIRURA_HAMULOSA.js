var express = require('express');
var routerCHEILOSPIRURA_HAMULOSA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCHEILOSPIRURA_HAMULOSA.get('/', function(req, res) {

    var renderObj = {
        title: "Cheilospirura hamulosa",
        currMap: "pdf/web/viewer.html?file=species-pages/CHEILOSPIRURA_HAMULOSA/CHEILOSPIRURA HAMULOSA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/CHEILOSPIRURA_HAMULOSA/future-maps/future.pdf",
        url: "/CHEILOSPIRURA_HAMULOSA",
        urlCSV: "pdf/web/species-pages/CHEILOSPIRURA_HAMULOSA/CHEILOSPIRURA HAMULOSA pearldata.csv"
    };
    res.render('CHEILOSPIRURA_HAMULOSA', renderObj);
});

// Grab data from document
routerCHEILOSPIRURA_HAMULOSA.post('/', function(req, res) {

    res.end();
});

module.exports = routerCHEILOSPIRURA_HAMULOSA;
