var express = require('express');
var routerCARIOS_VESPERTILIONIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCARIOS_VESPERTILIONIS.get('/', function(req, res) {

    var renderObj = {
        title: "Carios vespertilionis",
        currMap: "pdf/web/viewer.html?file=species-pages/CARIOS_VESPERTILIONIS/CARIOS VESPERTILIONIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/CARIOS_VESPERTILIONIS/future-maps/future.pdf",
        url: "/CARIOS_VESPERTILIONIS",
        urlCSV: "pdf/web/species-pages/CARIOS_VESPERTILIONIS/CARIOS VESPERTILIONIS pearldata.csv"
    };
    res.render('CARIOS_VESPERTILIONIS', renderObj);
});

// Grab data from document
routerCARIOS_VESPERTILIONIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerCARIOS_VESPERTILIONIS;
