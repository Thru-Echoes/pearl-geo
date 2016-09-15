var express = require('express');
var routerRHIPICENTOR_BICORNIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHIPICENTOR_BICORNIS.get('/', function(req, res) {

    var renderObj = {
        title: "Rhipicentor bicornis",
        currMap: "pdf/web/viewer.html?file=species-pages/RHIPICENTOR_BICORNIS/RHIPICENTOR BICORNIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHIPICENTOR_BICORNIS/future-maps/future.pdf",
        url: "/RHIPICENTOR_BICORNIS",
        urlCSV: "pdf/web/species-pages/RHIPICENTOR_BICORNIS/RHIPICENTOR BICORNIS pearldata.csv"
    };
    res.render('RHIPICENTOR_BICORNIS', renderObj);
});

// Grab data from document
routerRHIPICENTOR_BICORNIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHIPICENTOR_BICORNIS;
