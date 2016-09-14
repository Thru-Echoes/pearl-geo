var express = require('express');
var routerGABUCINIA_DELIBATA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerGABUCINIA_DELIBATA.get('/', function(req, res) {

    var renderObj = {
        title: "Gabucinia delibata",
        currMap: "pdf/web/viewer.html?file=species-pages/GABUCINIA_DELIBATA/GABUCINIA DELIBATA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/GABUCINIA_DELIBATA/future-maps/future.pdf",
        url: "/GABUCINIA_DELIBATA",
        urlCSV: "pdf/web/species-pages/GABUCINIA_DELIBATA/GABUCINIA DELIBATA pearldata.csv"
    };
    res.render('GABUCINIA_DELIBATA', renderObj);
});

// Grab data from document
routerGABUCINIA_DELIBATA.post('/', function(req, res) {

    res.end();
});

module.exports = routerGABUCINIA_DELIBATA;
