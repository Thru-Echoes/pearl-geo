var express = require('express');
var routerSETARIA_LABIATOPAPILLOSA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerSETARIA_LABIATOPAPILLOSA.get('/', function(req, res) {

    var renderObj = {
        title: "Setaria labiatopapillosa",
        currMap: "pdf/web/viewer.html?file=species-pages/SETARIA_LABIATOPAPILLOSA/SETARIA LABIATOPAPILLOSA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/SETARIA_LABIATOPAPILLOSA/future-maps/future.pdf",
        url: "/SETARIA_LABIATOPAPILLOSA",
        urlCSV: "pdf/web/species-pages/SETARIA_LABIATOPAPILLOSA/SETARIA LABIATOPAPILLOSA pearldata.csv"
    };
    res.render('SETARIA_LABIATOPAPILLOSA', renderObj);
});

// Grab data from document
routerSETARIA_LABIATOPAPILLOSA.post('/', function(req, res) {

    res.end();
});

module.exports = routerSETARIA_LABIATOPAPILLOSA;
