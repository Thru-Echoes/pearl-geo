var express = require('express');
var routerXENOPSYLLA_CHEOPIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerXENOPSYLLA_CHEOPIS.get('/', function(req, res) {

    var renderObj = {
        title: "Xenopsylla cheopis",
        currMap: "pdf/web/viewer.html?file=species-pages/XENOPSYLLA_CHEOPIS/XENOPSYLLA CHEOPIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/XENOPSYLLA_CHEOPIS/future-maps/future.pdf",
        url: "/XENOPSYLLA_CHEOPIS",
        urlCSV: "pdf/web/species-pages/XENOPSYLLA_CHEOPIS/XENOPSYLLA CHEOPIS pearldata.csv"
    };
    res.render('XENOPSYLLA_CHEOPIS', renderObj);
});

// Grab data from document
routerXENOPSYLLA_CHEOPIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerXENOPSYLLA_CHEOPIS;
