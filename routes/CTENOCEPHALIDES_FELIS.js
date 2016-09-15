var express = require('express');
var routerCTENOCEPHALIDES_FELIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCTENOCEPHALIDES_FELIS.get('/', function(req, res) {

    var renderObj = {
        title: "Ctenocephalides felis",
        currMap: "pdf/web/viewer.html?file=species-pages/CTENOCEPHALIDES_FELIS/CTENOCEPHALIDES FELIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/CTENOCEPHALIDES_FELIS/future-maps/future.pdf",
        url: "/CTENOCEPHALIDES_FELIS",
        urlCSV: "pdf/web/species-pages/CTENOCEPHALIDES_FELIS/CTENOCEPHALIDES FELIS pearldata.csv"
    };
    res.render('CTENOCEPHALIDES_FELIS', renderObj);
});

// Grab data from document
routerCTENOCEPHALIDES_FELIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerCTENOCEPHALIDES_FELIS;
