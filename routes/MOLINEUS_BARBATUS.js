var express = require('express');
var routerMOLINEUS_BARBATUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerMOLINEUS_BARBATUS.get('/', function(req, res) {

    var renderObj = {
        title: "Molineus barbatus",
        currMap: "pdf/web/viewer.html?file=species-pages/MOLINEUS_BARBATUS/MOLINEUS BARBATUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/MOLINEUS_BARBATUS/future-maps/future.pdf",
        url: "/MOLINEUS_BARBATUS",
        urlCSV: "pdf/web/species-pages/MOLINEUS_BARBATUS/MOLINEUS BARBATUS pearldata.csv"
    };
    res.render('MOLINEUS_BARBATUS', renderObj);
});

// Grab data from document
routerMOLINEUS_BARBATUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerMOLINEUS_BARBATUS;
