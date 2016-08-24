var express = require('express');
var routerCLONORCHIS_SINENSIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCLONORCHIS_SINENSIS.get('/', function(req, res) {

    var renderObj = {
        title: "Clonorchis sinensis",
        currMap: "pdf/web/viewer.html?file=species-pages/CLONORCHIS_SINENSIS/CLONORCHIS SINENSIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/CLONORCHIS_SINENSIS/future-maps/future.pdf",
        url: "/CLONORCHIS_SINENSIS",
        urlCSV: "pdf/web/species-pages/CLONORCHIS_SINENSIS/CLONORCHIS SINENSIS pearldata.csv"
    };
    res.render('CLONORCHIS_SINENSIS', renderObj);
});

// Grab data from document
routerCLONORCHIS_SINENSIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerCLONORCHIS_SINENSIS;
