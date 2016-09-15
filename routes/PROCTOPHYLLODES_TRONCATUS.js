var express = require('express');
var routerPROCTOPHYLLODES_TRONCATUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerPROCTOPHYLLODES_TRONCATUS.get('/', function(req, res) {

    var renderObj = {
        title: "Proctophyllodes troncatus",
        currMap: "pdf/web/viewer.html?file=species-pages/PROCTOPHYLLODES_TRONCATUS/PROCTOPHYLLODES TRONCATUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/PROCTOPHYLLODES_TRONCATUS/future-maps/future.pdf",
        url: "/PROCTOPHYLLODES_TRONCATUS",
        urlCSV: "pdf/web/species-pages/PROCTOPHYLLODES_TRONCATUS/PROCTOPHYLLODES TRONCATUS pearldata.csv"
    };
    res.render('PROCTOPHYLLODES_TRONCATUS', renderObj);
});

// Grab data from document
routerPROCTOPHYLLODES_TRONCATUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerPROCTOPHYLLODES_TRONCATUS;
