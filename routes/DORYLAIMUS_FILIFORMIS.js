var express = require('express');
var routerDORYLAIMUS_FILIFORMIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerDORYLAIMUS_FILIFORMIS.get('/', function(req, res) {

    var renderObj = {
        title: "Dorylaimus filiformis",
        currMap: "pdf/web/viewer.html?file=species-pages/DORYLAIMUS_FILIFORMIS/DORYLAIMUS FILIFORMIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/DORYLAIMUS_FILIFORMIS/future-maps/future.pdf",
        url: "/DORYLAIMUS_FILIFORMIS",
        urlCSV: "pdf/web/species-pages/DORYLAIMUS_FILIFORMIS/DORYLAIMUS FILIFORMIS pearldata.csv"
    };
    res.render('DORYLAIMUS_FILIFORMIS', renderObj);
});

// Grab data from document
routerDORYLAIMUS_FILIFORMIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerDORYLAIMUS_FILIFORMIS;
