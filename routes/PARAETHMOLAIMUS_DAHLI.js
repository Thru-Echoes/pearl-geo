var express = require('express');
var routerPARAETHMOLAIMUS_DAHLI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerPARAETHMOLAIMUS_DAHLI.get('/', function(req, res) {

    var renderObj = {
        title: "Paraethmolaimus dahli",
        currMap: "pdf/web/viewer.html?file=species-pages/PARAETHMOLAIMUS_DAHLI/PARAETHMOLAIMUS DAHLI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/PARAETHMOLAIMUS_DAHLI/future-maps/future.pdf",
        url: "/PARAETHMOLAIMUS_DAHLI",
        urlCSV: "pdf/web/species-pages/PARAETHMOLAIMUS_DAHLI/PARAETHMOLAIMUS DAHLI pearldata.csv"
    };
    res.render('PARAETHMOLAIMUS_DAHLI', renderObj);
});

// Grab data from document
routerPARAETHMOLAIMUS_DAHLI.post('/', function(req, res) {

    res.end();
});

module.exports = routerPARAETHMOLAIMUS_DAHLI;
