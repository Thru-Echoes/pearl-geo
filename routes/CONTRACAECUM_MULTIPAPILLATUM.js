var express = require('express');
var routerCONTRACAECUM_MULTIPAPILLATUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCONTRACAECUM_MULTIPAPILLATUM.get('/', function(req, res) {

    var renderObj = {
        title: "Contracaecum multipapillatum",
        currMap: "pdf/web/viewer.html?file=species-pages/CONTRACAECUM_MULTIPAPILLATUM/CONTRACAECUM MULTIPAPILLATUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/CONTRACAECUM_MULTIPAPILLATUM/future-maps/future.pdf",
        url: "/CONTRACAECUM_MULTIPAPILLATUM",
        urlCSV: "pdf/web/species-pages/CONTRACAECUM_MULTIPAPILLATUM/CONTRACAECUM MULTIPAPILLATUM pearldata.csv"
    };
    res.render('CONTRACAECUM_MULTIPAPILLATUM', renderObj);
});

// Grab data from document
routerCONTRACAECUM_MULTIPAPILLATUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerCONTRACAECUM_MULTIPAPILLATUM;
