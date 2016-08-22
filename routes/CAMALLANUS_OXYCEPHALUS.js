var express = require('express');
var routerCAMALLANUS_OXYCEPHALUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCAMALLANUS_OXYCEPHALUS.get('/', function(req, res) {

    var renderObj = {
        title: "Camallanus oxycephalus",
        currMap: "pdf/web/viewer.html?file=species-pages/CAMALLANUS_OXYCEPHALUS/CAMALLANUS OXYCEPHALUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/CAMALLANUS_OXYCEPHALUS/future-maps/future.pdf",
        url: "/CAMALLANUS_OXYCEPHALUS",
        urlCSV: "pdf/web/species-pages/CAMALLANUS_OXYCEPHALUS/CAMALLANUS OXYCEPHALUS pearldata.csv"
    };
    res.render('CAMALLANUS_OXYCEPHALUS', renderObj);
});

// Grab data from document
routerCAMALLANUS_OXYCEPHALUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerCAMALLANUS_OXYCEPHALUS;
