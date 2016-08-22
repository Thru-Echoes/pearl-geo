var express = require('express');
var routerCERATOPHYLLUS_HIRUNDINIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCERATOPHYLLUS_HIRUNDINIS.get('/', function(req, res) {

    var renderObj = {
        title: "Ceratophyllus hirundinis",
        currMap: "pdf/web/viewer.html?file=species-pages/CERATOPHYLLUS_HIRUNDINIS/CERATOPHYLLUS HIRUNDINIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/CERATOPHYLLUS_HIRUNDINIS/future-maps/future.pdf",
        url: "/CERATOPHYLLUS_HIRUNDINIS",
        urlCSV: "pdf/web/species-pages/CERATOPHYLLUS_HIRUNDINIS/CERATOPHYLLUS HIRUNDINIS pearldata.csv"
    };
    res.render('CERATOPHYLLUS_HIRUNDINIS', renderObj);
});

// Grab data from document
routerCERATOPHYLLUS_HIRUNDINIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerCERATOPHYLLUS_HIRUNDINIS;
