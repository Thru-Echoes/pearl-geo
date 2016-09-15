var express = require('express');
var routerOLIGOGONOTYLUS_MANTERI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerOLIGOGONOTYLUS_MANTERI.get('/', function(req, res) {

    var renderObj = {
        title: "Oligogonotylus manteri",
        currMap: "pdf/web/viewer.html?file=species-pages/OLIGOGONOTYLUS_MANTERI/OLIGOGONOTYLUS MANTERI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/OLIGOGONOTYLUS_MANTERI/future-maps/future.pdf",
        url: "/OLIGOGONOTYLUS_MANTERI",
        urlCSV: "pdf/web/species-pages/OLIGOGONOTYLUS_MANTERI/OLIGOGONOTYLUS MANTERI pearldata.csv"
    };
    res.render('OLIGOGONOTYLUS_MANTERI', renderObj);
});

// Grab data from document
routerOLIGOGONOTYLUS_MANTERI.post('/', function(req, res) {

    res.end();
});

module.exports = routerOLIGOGONOTYLUS_MANTERI;
