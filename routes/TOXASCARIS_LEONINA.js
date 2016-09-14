var express = require('express');
var routerTOXASCARIS_LEONINA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerTOXASCARIS_LEONINA.get('/', function(req, res) {

    var renderObj = {
        title: "Toxascaris leonina",
        currMap: "pdf/web/viewer.html?file=species-pages/TOXASCARIS_LEONINA/TOXASCARIS LEONINA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/TOXASCARIS_LEONINA/future-maps/future.pdf",
        url: "/TOXASCARIS_LEONINA",
        urlCSV: "pdf/web/species-pages/TOXASCARIS_LEONINA/TOXASCARIS LEONINA pearldata.csv"
    };
    res.render('TOXASCARIS_LEONINA', renderObj);
});

// Grab data from document
routerTOXASCARIS_LEONINA.post('/', function(req, res) {

    res.end();
});

module.exports = routerTOXASCARIS_LEONINA;
