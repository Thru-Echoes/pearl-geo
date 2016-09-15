var express = require('express');
var routerOSTERTAGIA_GRUEHNERI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerOSTERTAGIA_GRUEHNERI.get('/', function(req, res) {

    var renderObj = {
        title: "Ostertagia gruehneri",
        currMap: "pdf/web/viewer.html?file=species-pages/OSTERTAGIA_GRUEHNERI/OSTERTAGIA GRUEHNERI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/OSTERTAGIA_GRUEHNERI/future-maps/future.pdf",
        url: "/OSTERTAGIA_GRUEHNERI",
        urlCSV: "pdf/web/species-pages/OSTERTAGIA_GRUEHNERI/OSTERTAGIA GRUEHNERI pearldata.csv"
    };
    res.render('OSTERTAGIA_GRUEHNERI', renderObj);
});

// Grab data from document
routerOSTERTAGIA_GRUEHNERI.post('/', function(req, res) {

    res.end();
});

module.exports = routerOSTERTAGIA_GRUEHNERI;
