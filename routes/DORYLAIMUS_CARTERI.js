var express = require('express');
var routerDORYLAIMUS_CARTERI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerDORYLAIMUS_CARTERI.get('/', function(req, res) {

    var renderObj = {
        title: "Dorylaimus carteri",
        currMap: "pdf/web/viewer.html?file=species-pages/DORYLAIMUS_CARTERI/DORYLAIMUS CARTERI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/DORYLAIMUS_CARTERI/future-maps/future.pdf",
        url: "/DORYLAIMUS_CARTERI",
        urlCSV: "pdf/web/species-pages/DORYLAIMUS_CARTERI/DORYLAIMUS CARTERI pearldata.csv"
    };
    res.render('DORYLAIMUS_CARTERI', renderObj);
});

// Grab data from document
routerDORYLAIMUS_CARTERI.post('/', function(req, res) {

    res.end();
});

module.exports = routerDORYLAIMUS_CARTERI;
