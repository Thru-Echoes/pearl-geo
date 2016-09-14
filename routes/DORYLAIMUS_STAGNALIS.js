var express = require('express');
var routerDORYLAIMUS_STAGNALIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerDORYLAIMUS_STAGNALIS.get('/', function(req, res) {

    var renderObj = {
        title: "Dorylaimus stagnalis",
        currMap: "pdf/web/viewer.html?file=species-pages/DORYLAIMUS_STAGNALIS/DORYLAIMUS STAGNALIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/DORYLAIMUS_STAGNALIS/future-maps/future.pdf",
        url: "/DORYLAIMUS_STAGNALIS",
        urlCSV: "pdf/web/species-pages/DORYLAIMUS_STAGNALIS/DORYLAIMUS STAGNALIS pearldata.csv"
    };
    res.render('DORYLAIMUS_STAGNALIS', renderObj);
});

// Grab data from document
routerDORYLAIMUS_STAGNALIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerDORYLAIMUS_STAGNALIS;
