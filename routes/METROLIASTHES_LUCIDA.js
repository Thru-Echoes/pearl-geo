var express = require('express');
var routerMETROLIASTHES_LUCIDA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerMETROLIASTHES_LUCIDA.get('/', function(req, res) {

    var renderObj = {
        title: "Metroliasthes lucida",
        currMap: "pdf/web/viewer.html?file=species-pages/METROLIASTHES_LUCIDA/METROLIASTHES LUCIDA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/METROLIASTHES_LUCIDA/future-maps/future.pdf",
        url: "/METROLIASTHES_LUCIDA",
        urlCSV: "pdf/web/species-pages/METROLIASTHES_LUCIDA/METROLIASTHES LUCIDA pearldata.csv"
    };
    res.render('METROLIASTHES_LUCIDA', renderObj);
});

// Grab data from document
routerMETROLIASTHES_LUCIDA.post('/', function(req, res) {

    res.end();
});

module.exports = routerMETROLIASTHES_LUCIDA;
