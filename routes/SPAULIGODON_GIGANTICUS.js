var express = require('express');
var routerSPAULIGODON_GIGANTICUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerSPAULIGODON_GIGANTICUS.get('/', function(req, res) {

    var renderObj = {
        title: "Spauligodon giganticus",
        currMap: "pdf/web/viewer.html?file=species-pages/SPAULIGODON_GIGANTICUS/SPAULIGODON GIGANTICUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/SPAULIGODON_GIGANTICUS/future-maps/future.pdf",
        url: "/SPAULIGODON_GIGANTICUS",
        urlCSV: "pdf/web/species-pages/SPAULIGODON_GIGANTICUS/SPAULIGODON GIGANTICUS pearldata.csv"
    };
    res.render('SPAULIGODON_GIGANTICUS', renderObj);
});

// Grab data from document
routerSPAULIGODON_GIGANTICUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerSPAULIGODON_GIGANTICUS;
