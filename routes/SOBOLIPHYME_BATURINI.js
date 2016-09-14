var express = require('express');
var routerSOBOLIPHYME_BATURINI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerSOBOLIPHYME_BATURINI.get('/', function(req, res) {

    var renderObj = {
        title: "Soboliphyme baturini",
        currMap: "pdf/web/viewer.html?file=species-pages/SOBOLIPHYME_BATURINI/SOBOLIPHYME BATURINI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/SOBOLIPHYME_BATURINI/future-maps/future.pdf",
        url: "/SOBOLIPHYME_BATURINI",
        urlCSV: "pdf/web/species-pages/SOBOLIPHYME_BATURINI/SOBOLIPHYME BATURINI pearldata.csv"
    };
    res.render('SOBOLIPHYME_BATURINI', renderObj);
});

// Grab data from document
routerSOBOLIPHYME_BATURINI.post('/', function(req, res) {

    res.end();
});

module.exports = routerSOBOLIPHYME_BATURINI;
