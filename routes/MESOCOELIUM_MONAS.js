var express = require('express');
var routerMESOCOELIUM_MONAS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerMESOCOELIUM_MONAS.get('/', function(req, res) {

    var renderObj = {
        title: "Mesocoelium monas",
        currMap: "pdf/web/viewer.html?file=species-pages/MESOCOELIUM_MONAS/MESOCOELIUM MONAS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/MESOCOELIUM_MONAS/future-maps/future.pdf",
        url: "/MESOCOELIUM_MONAS",
        urlCSV: "pdf/web/species-pages/MESOCOELIUM_MONAS/MESOCOELIUM MONAS pearldata.csv"
    };
    res.render('MESOCOELIUM_MONAS', renderObj);
});

// Grab data from document
routerMESOCOELIUM_MONAS.post('/', function(req, res) {

    res.end();
});

module.exports = routerMESOCOELIUM_MONAS;
