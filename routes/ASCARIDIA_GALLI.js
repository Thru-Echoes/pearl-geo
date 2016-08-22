var express = require('express');
var routerASCARIDIA_GALLI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerASCARIDIA_GALLI.get('/', function(req, res) {

    var renderObj = {
        title: "Ascaridia galli",
        currMap: "pdf/web/viewer.html?file=species-pages/ASCARIDIA_GALLI/ASCARIDIA GALLI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/ASCARIDIA_GALLI/future-maps/future.pdf",
        url: "/ASCARIDIA_GALLI",
        urlCSV: "pdf/web/species-pages/ASCARIDIA_GALLI/ASCARIDIA GALLI pearldata.csv"
    };
    res.render('ASCARIDIA_GALLI', renderObj);
});

// Grab data from document
routerASCARIDIA_GALLI.post('/', function(req, res) {

    res.end();
});

module.exports = routerASCARIDIA_GALLI;
