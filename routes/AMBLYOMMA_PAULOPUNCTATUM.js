var express = require('express');
var routerAMBLYOMMA_PAULOPUNCTATUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAMBLYOMMA_PAULOPUNCTATUM.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma paulopunctatum",
        clade: "Ixodida",
        source: "Cumming",
        currMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_PAULOPUNCTATUM/AMBLYOMMA PAULOPUNCTATUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/AMBLYOMMA_PAULOPUNCTATUM/future-maps/future.pdf",
        url: "/AMBLYOMMA_PAULOPUNCTATUM",
        urlCSV: "pdf/web/species-pages/AMBLYOMMA_PAULOPUNCTATUM/AMBLYOMMA PAULOPUNCTATUM pearldata.csv"
    };
    res.render('AMBLYOMMA_PAULOPUNCTATUM', renderObj);
});

// Grab data from document
routerAMBLYOMMA_PAULOPUNCTATUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerAMBLYOMMA_PAULOPUNCTATUM;
