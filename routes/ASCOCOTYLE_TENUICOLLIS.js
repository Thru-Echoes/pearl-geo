var express = require('express');
var routerASCOCOTYLE_TENUICOLLIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerASCOCOTYLE_TENUICOLLIS.get('/', function(req, res) {

    var renderObj = {
        title: "Ascocotyle tenuicollis",
        currMap: "pdf/web/viewer.html?file=species-pages/ASCOCOTYLE_TENUICOLLIS/ASCOCOTYLE TENUICOLLIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/ASCOCOTYLE_TENUICOLLIS/future-maps/future.pdf",
        url: "/ASCOCOTYLE_TENUICOLLIS",
        urlCSV: "pdf/web/species-pages/ASCOCOTYLE_TENUICOLLIS/ASCOCOTYLE TENUICOLLIS pearldata.csv"
    };
    res.render('ASCOCOTYLE_TENUICOLLIS', renderObj);
});

// Grab data from document
routerASCOCOTYLE_TENUICOLLIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerASCOCOTYLE_TENUICOLLIS;
