var express = require('express');
var routerPOMPHORHYNCHUS_BULBOCOLLI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerPOMPHORHYNCHUS_BULBOCOLLI.get('/', function(req, res) {

    var renderObj = {
        title: "Pomphorhynchus bulbocolli",
        currMap: "pdf/web/viewer.html?file=species-pages/POMPHORHYNCHUS_BULBOCOLLI/POMPHORHYNCHUS BULBOCOLLI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/POMPHORHYNCHUS_BULBOCOLLI/future-maps/future.pdf",
        url: "/POMPHORHYNCHUS_BULBOCOLLI",
        urlCSV: "pdf/web/species-pages/POMPHORHYNCHUS_BULBOCOLLI/POMPHORHYNCHUS BULBOCOLLI pearldata.csv"
    };
    res.render('POMPHORHYNCHUS_BULBOCOLLI', renderObj);
});

// Grab data from document
routerPOMPHORHYNCHUS_BULBOCOLLI.post('/', function(req, res) {

    res.end();
});

module.exports = routerPOMPHORHYNCHUS_BULBOCOLLI;
