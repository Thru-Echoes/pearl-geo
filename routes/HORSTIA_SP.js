var express = require('express');
var routerHORSTIA_SP = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerHORSTIA_SP.get('/', function(req, res) {

    var renderObj = {
        title: "Horstia sp.",
        currMap: "pdf/web/viewer.html?file=species-pages/HORSTIA_SP/HORSTIA SP. current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/HORSTIA_SP/future-maps/future.pdf",
        url: "/HORSTIA_SP",
        urlCSV: "pdf/web/species-pages/HORSTIA_SP/HORSTIA SP. pearldata.csv"
    };
    res.render('HORSTIA_SP', renderObj);
});

// Grab data from document
routerHORSTIA_SP.post('/', function(req, res) {

    res.end();
});

module.exports = routerHORSTIA_SP;
