var express = require('express');
var routerARGAS_WALKERAE = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerARGAS_WALKERAE.get('/', function(req, res) {

    var renderObj = {
        title: "Argas walkerae",
        currMap: "pdf/web/viewer.html?file=species-pages/ARGAS_WALKERAE/ARGAS WALKERAE current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/ARGAS_WALKERAE/future-maps/future.pdf",
        url: "/ARGAS_WALKERAE",
        urlCSV: "pdf/web/species-pages/ARGAS_WALKERAE/ARGAS WALKERAE pearldata.csv"
    };
    res.render('ARGAS_WALKERAE', renderObj);
});

// Grab data from document
routerARGAS_WALKERAE.post('/', function(req, res) {

    res.end();
});

module.exports = routerARGAS_WALKERAE;
