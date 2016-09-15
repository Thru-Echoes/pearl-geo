var express = require('express');
var routerTHYSANOSOMA_ACTINIOIDES = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerTHYSANOSOMA_ACTINIOIDES.get('/', function(req, res) {

    var renderObj = {
        title: "Thysanosoma actinioides",
        currMap: "pdf/web/viewer.html?file=species-pages/THYSANOSOMA_ACTINIOIDES/THYSANOSOMA ACTINIOIDES current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/THYSANOSOMA_ACTINIOIDES/future-maps/future.pdf",
        url: "/THYSANOSOMA_ACTINIOIDES",
        urlCSV: "pdf/web/species-pages/THYSANOSOMA_ACTINIOIDES/THYSANOSOMA ACTINIOIDES pearldata.csv"
    };
    res.render('THYSANOSOMA_ACTINIOIDES', renderObj);
});

// Grab data from document
routerTHYSANOSOMA_ACTINIOIDES.post('/', function(req, res) {

    res.end();
});

module.exports = routerTHYSANOSOMA_ACTINIOIDES;
