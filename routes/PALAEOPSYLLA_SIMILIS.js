var express = require('express');
var routerPALAEOPSYLLA_SIMILIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerPALAEOPSYLLA_SIMILIS.get('/', function(req, res) {

    var renderObj = {
        title: "Palaeopsylla similis",
        currMap: "pdf/web/viewer.html?file=species-pages/PALAEOPSYLLA_SIMILIS/PALAEOPSYLLA SIMILIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/PALAEOPSYLLA_SIMILIS/future-maps/future.pdf",
        url: "/PALAEOPSYLLA_SIMILIS",
        urlCSV: "pdf/web/species-pages/PALAEOPSYLLA_SIMILIS/PALAEOPSYLLA SIMILIS pearldata.csv"
    };
    res.render('PALAEOPSYLLA_SIMILIS', renderObj);
});

// Grab data from document
routerPALAEOPSYLLA_SIMILIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerPALAEOPSYLLA_SIMILIS;
