var express = require('express');
var routerARALICHUS_NOBILIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerARALICHUS_NOBILIS.get('/', function(req, res) {

    var renderObj = {
        title: "Aralichus nobilis",
        currMap: "pdf/web/viewer.html?file=species-pages/ARALICHUS_NOBILIS/ARALICHUS NOBILIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/ARALICHUS_NOBILIS/future-maps/future.pdf",
        url: "/ARALICHUS_NOBILIS",
        urlCSV: "pdf/web/species-pages/ARALICHUS_NOBILIS/ARALICHUS NOBILIS pearldata.csv"
    };
    res.render('ARALICHUS_NOBILIS', renderObj);
});

// Grab data from document
routerARALICHUS_NOBILIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerARALICHUS_NOBILIS;
