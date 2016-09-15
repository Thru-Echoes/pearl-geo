var express = require('express');
var routerPEROMYSCOPSYLLA_BIDENTATA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerPEROMYSCOPSYLLA_BIDENTATA.get('/', function(req, res) {

    var renderObj = {
        title: "Peromyscopsylla bidentata",
        currMap: "pdf/web/viewer.html?file=species-pages/PEROMYSCOPSYLLA_BIDENTATA/PEROMYSCOPSYLLA BIDENTATA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/PEROMYSCOPSYLLA_BIDENTATA/future-maps/future.pdf",
        url: "/PEROMYSCOPSYLLA_BIDENTATA",
        urlCSV: "pdf/web/species-pages/PEROMYSCOPSYLLA_BIDENTATA/PEROMYSCOPSYLLA BIDENTATA pearldata.csv"
    };
    res.render('PEROMYSCOPSYLLA_BIDENTATA', renderObj);
});

// Grab data from document
routerPEROMYSCOPSYLLA_BIDENTATA.post('/', function(req, res) {

    res.end();
});

module.exports = routerPEROMYSCOPSYLLA_BIDENTATA;
