var express = require('express');
var routerBOTHRIOCROTON_HYDROSAURI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerBOTHRIOCROTON_HYDROSAURI.get('/', function(req, res) {

    var renderObj = {
        title: "Bothriocroton hydrosauri",
        currMap: "pdf/web/viewer.html?file=species-pages/BOTHRIOCROTON_HYDROSAURI/BOTHRIOCROTON HYDROSAURI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/BOTHRIOCROTON_HYDROSAURI/future-maps/future.pdf",
        url: "/BOTHRIOCROTON_HYDROSAURI",
        urlCSV: "pdf/web/species-pages/BOTHRIOCROTON_HYDROSAURI/BOTHRIOCROTON HYDROSAURI pearldata.csv"
    };
    res.render('BOTHRIOCROTON_HYDROSAURI', renderObj);
});

// Grab data from document
routerBOTHRIOCROTON_HYDROSAURI.post('/', function(req, res) {

    res.end();
});

module.exports = routerBOTHRIOCROTON_HYDROSAURI;
