var express = require('express');
var routerCTENOCEPHALIDES_CANIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCTENOCEPHALIDES_CANIS.get('/', function(req, res) {

    var renderObj = {
        title: "Ctenocephalides canis",
        currMap: "pdf/web/viewer.html?file=species-pages/CTENOCEPHALIDES_CANIS/CTENOCEPHALIDES CANIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/CTENOCEPHALIDES_CANIS/future-maps/future.pdf",
        url: "/CTENOCEPHALIDES_CANIS",
        urlCSV: "pdf/web/species-pages/CTENOCEPHALIDES_CANIS/CTENOCEPHALIDES CANIS pearldata.csv"
    };
    res.render('CTENOCEPHALIDES_CANIS', renderObj);
});

// Grab data from document
routerCTENOCEPHALIDES_CANIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerCTENOCEPHALIDES_CANIS;
