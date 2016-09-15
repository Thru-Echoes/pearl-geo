var express = require('express');
var routerCRUZIA_TENTACULATA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCRUZIA_TENTACULATA.get('/', function(req, res) {

    var renderObj = {
        title: "Cruzia tentaculata",
        currMap: "pdf/web/viewer.html?file=species-pages/CRUZIA_TENTACULATA/CRUZIA TENTACULATA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/CRUZIA_TENTACULATA/future-maps/future.pdf",
        url: "/CRUZIA_TENTACULATA",
        urlCSV: "pdf/web/species-pages/CRUZIA_TENTACULATA/CRUZIA TENTACULATA pearldata.csv"
    };
    res.render('CRUZIA_TENTACULATA', renderObj);
});

// Grab data from document
routerCRUZIA_TENTACULATA.post('/', function(req, res) {

    res.end();
});

module.exports = routerCRUZIA_TENTACULATA;
