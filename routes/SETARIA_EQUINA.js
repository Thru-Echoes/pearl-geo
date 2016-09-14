var express = require('express');
var routerSETARIA_EQUINA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerSETARIA_EQUINA.get('/', function(req, res) {

    var renderObj = {
        title: "Setaria equina",
        currMap: "pdf/web/viewer.html?file=species-pages/SETARIA_EQUINA/SETARIA EQUINA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/SETARIA_EQUINA/future-maps/future.pdf",
        url: "/SETARIA_EQUINA",
        urlCSV: "pdf/web/species-pages/SETARIA_EQUINA/SETARIA EQUINA pearldata.csv"
    };
    res.render('SETARIA_EQUINA', renderObj);
});

// Grab data from document
routerSETARIA_EQUINA.post('/', function(req, res) {

    res.end();
});

module.exports = routerSETARIA_EQUINA;
