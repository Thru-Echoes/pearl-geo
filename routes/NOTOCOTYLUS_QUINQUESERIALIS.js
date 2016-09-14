var express = require('express');
var routerNOTOCOTYLUS_QUINQUESERIALIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerNOTOCOTYLUS_QUINQUESERIALIS.get('/', function(req, res) {

    var renderObj = {
        title: "Notocotylus quinqueserialis",
        currMap: "pdf/web/viewer.html?file=species-pages/NOTOCOTYLUS_QUINQUESERIALIS/NOTOCOTYLUS QUINQUESERIALIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/NOTOCOTYLUS_QUINQUESERIALIS/future-maps/future.pdf",
        url: "/NOTOCOTYLUS_QUINQUESERIALIS",
        urlCSV: "pdf/web/species-pages/NOTOCOTYLUS_QUINQUESERIALIS/NOTOCOTYLUS QUINQUESERIALIS pearldata.csv"
    };
    res.render('NOTOCOTYLUS_QUINQUESERIALIS', renderObj);
});

// Grab data from document
routerNOTOCOTYLUS_QUINQUESERIALIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerNOTOCOTYLUS_QUINQUESERIALIS;
