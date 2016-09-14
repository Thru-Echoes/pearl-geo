var express = require('express');
var routerSYPHACIA_EUTAMII = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerSYPHACIA_EUTAMII.get('/', function(req, res) {

    var renderObj = {
        title: "Syphacia eutamii",
        currMap: "pdf/web/viewer.html?file=species-pages/SYPHACIA_EUTAMII/SYPHACIA EUTAMII current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/SYPHACIA_EUTAMII/future-maps/future.pdf",
        url: "/SYPHACIA_EUTAMII",
        urlCSV: "pdf/web/species-pages/SYPHACIA_EUTAMII/SYPHACIA EUTAMII pearldata.csv"
    };
    res.render('SYPHACIA_EUTAMII', renderObj);
});

// Grab data from document
routerSYPHACIA_EUTAMII.post('/', function(req, res) {

    res.end();
});

module.exports = routerSYPHACIA_EUTAMII;
