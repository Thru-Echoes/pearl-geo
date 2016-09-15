var express = require('express');
var routerPARELAPHOSTRONGYLUS_TENUIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerPARELAPHOSTRONGYLUS_TENUIS.get('/', function(req, res) {

    var renderObj = {
        title: "Parelaphostrongylus tenuis",
        currMap: "pdf/web/viewer.html?file=species-pages/PARELAPHOSTRONGYLUS_TENUIS/PARELAPHOSTRONGYLUS TENUIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/PARELAPHOSTRONGYLUS_TENUIS/future-maps/future.pdf",
        url: "/PARELAPHOSTRONGYLUS_TENUIS",
        urlCSV: "pdf/web/species-pages/PARELAPHOSTRONGYLUS_TENUIS/PARELAPHOSTRONGYLUS TENUIS pearldata.csv"
    };
    res.render('PARELAPHOSTRONGYLUS_TENUIS', renderObj);
});

// Grab data from document
routerPARELAPHOSTRONGYLUS_TENUIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerPARELAPHOSTRONGYLUS_TENUIS;
