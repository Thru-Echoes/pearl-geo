var express = require('express');
var routerTHRASSIS_BACCHI_GLADIOLIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerTHRASSIS_BACCHI_GLADIOLIS.get('/', function(req, res) {

    var renderObj = {
        title: "Thrassis bacchi gladiolis",
        currMap: "pdf/web/viewer.html?file=species-pages/THRASSIS_BACCHI_GLADIOLIS/THRASSIS BACCHI GLADIOLIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/THRASSIS_BACCHI_GLADIOLIS/future-maps/future.pdf",
        url: "/THRASSIS_BACCHI_GLADIOLIS",
        urlCSV: "pdf/web/species-pages/THRASSIS_BACCHI_GLADIOLIS/THRASSIS BACCHI GLADIOLIS pearldata.csv"
    };
    res.render('THRASSIS_BACCHI_GLADIOLIS', renderObj);
});

// Grab data from document
routerTHRASSIS_BACCHI_GLADIOLIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerTHRASSIS_BACCHI_GLADIOLIS;
