var express = require('express');
var routerCERATOPHYLLUS_GALLINAE = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCERATOPHYLLUS_GALLINAE.get('/', function(req, res) {

    var renderObj = {
        title: "Ceratophyllus gallinae",
        currMap: "pdf/web/viewer.html?file=species-pages/CERATOPHYLLUS_GALLINAE/CERATOPHYLLUS GALLINAE current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/CERATOPHYLLUS_GALLINAE/future-maps/future.pdf",
        url: "/CERATOPHYLLUS_GALLINAE",
        urlCSV: "pdf/web/species-pages/CERATOPHYLLUS_GALLINAE/CERATOPHYLLUS GALLINAE pearldata.csv"
    };
    res.render('CERATOPHYLLUS_GALLINAE', renderObj);
});

// Grab data from document
routerCERATOPHYLLUS_GALLINAE.post('/', function(req, res) {

    res.end();
});

module.exports = routerCERATOPHYLLUS_GALLINAE;
