var express = require('express');
var routerASCOCOTYLE_LONGA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerASCOCOTYLE_LONGA.get('/', function(req, res) {

    var renderObj = {
        title: "Ascocotyle longa",
        currMap: "pdf/web/viewer.html?file=species-pages/ASCOCOTYLE_LONGA/ASCOCOTYLE LONGA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/ASCOCOTYLE_LONGA/future-maps/future.pdf",
        url: "/ASCOCOTYLE_LONGA",
        urlCSV: "pdf/web/species-pages/ASCOCOTYLE_LONGA/ASCOCOTYLE LONGA pearldata.csv"
    };
    res.render('ASCOCOTYLE_LONGA', renderObj);
});

// Grab data from document
routerASCOCOTYLE_LONGA.post('/', function(req, res) {

    res.end();
});

module.exports = routerASCOCOTYLE_LONGA;
