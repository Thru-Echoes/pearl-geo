var express = require('express');
var routerPROCTOPHYLLODES_PINNATUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerPROCTOPHYLLODES_PINNATUS.get('/', function(req, res) {

    var renderObj = {
        title: "Proctophyllodes pinnatus",
        currMap: "pdf/web/viewer.html?file=species-pages/PROCTOPHYLLODES_PINNATUS/PROCTOPHYLLODES PINNATUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/PROCTOPHYLLODES_PINNATUS/future-maps/future.pdf",
        url: "/PROCTOPHYLLODES_PINNATUS",
        urlCSV: "pdf/web/species-pages/PROCTOPHYLLODES_PINNATUS/PROCTOPHYLLODES PINNATUS pearldata.csv"
    };
    res.render('PROCTOPHYLLODES_PINNATUS', renderObj);
});

// Grab data from document
routerPROCTOPHYLLODES_PINNATUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerPROCTOPHYLLODES_PINNATUS;
