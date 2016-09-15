var express = require('express');
var routerDERMACENTOR_CIRCUMGUTTATUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerDERMACENTOR_CIRCUMGUTTATUS.get('/', function(req, res) {

    var renderObj = {
        title: "Dermacentor circumguttatus",
        currMap: "pdf/web/viewer.html?file=species-pages/DERMACENTOR_CIRCUMGUTTATUS/DERMACENTOR CIRCUMGUTTATUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/DERMACENTOR_CIRCUMGUTTATUS/future-maps/future.pdf",
        url: "/DERMACENTOR_CIRCUMGUTTATUS",
        urlCSV: "pdf/web/species-pages/DERMACENTOR_CIRCUMGUTTATUS/DERMACENTOR CIRCUMGUTTATUS pearldata.csv"
    };
    res.render('DERMACENTOR_CIRCUMGUTTATUS', renderObj);
});

// Grab data from document
routerDERMACENTOR_CIRCUMGUTTATUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerDERMACENTOR_CIRCUMGUTTATUS;
