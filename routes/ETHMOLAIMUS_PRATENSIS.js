var express = require('express');
var routerETHMOLAIMUS_PRATENSIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerETHMOLAIMUS_PRATENSIS.get('/', function(req, res) {

    var renderObj = {
        title: "Ethmolaimus pratensis",
        currMap: "pdf/web/viewer.html?file=species-pages/ETHMOLAIMUS_PRATENSIS/ETHMOLAIMUS PRATENSIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/ETHMOLAIMUS_PRATENSIS/future-maps/future.pdf",
        url: "/ETHMOLAIMUS_PRATENSIS",
        urlCSV: "pdf/web/species-pages/ETHMOLAIMUS_PRATENSIS/ETHMOLAIMUS PRATENSIS pearldata.csv"
    };
    res.render('ETHMOLAIMUS_PRATENSIS', renderObj);
});

// Grab data from document
routerETHMOLAIMUS_PRATENSIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerETHMOLAIMUS_PRATENSIS;
