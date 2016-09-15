var express = require('express');
var routerRHIPICENTOR_NUTTALLI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHIPICENTOR_NUTTALLI.get('/', function(req, res) {

    var renderObj = {
        title: "Rhipicentor nuttalli",
        currMap: "pdf/web/viewer.html?file=species-pages/RHIPICENTOR_NUTTALLI/RHIPICENTOR NUTTALLI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHIPICENTOR_NUTTALLI/future-maps/future.pdf",
        url: "/RHIPICENTOR_NUTTALLI",
        urlCSV: "pdf/web/species-pages/RHIPICENTOR_NUTTALLI/RHIPICENTOR NUTTALLI pearldata.csv"
    };
    res.render('RHIPICENTOR_NUTTALLI', renderObj);
});

// Grab data from document
routerRHIPICENTOR_NUTTALLI.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHIPICENTOR_NUTTALLI;
