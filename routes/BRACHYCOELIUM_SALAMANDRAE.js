var express = require('express');
var routerBRACHYCOELIUM_SALAMANDRAE = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerBRACHYCOELIUM_SALAMANDRAE.get('/', function(req, res) {

    var renderObj = {
        title: "Brachycoelium salamandrae",
        currMap: "pdf/web/viewer.html?file=species-pages/BRACHYCOELIUM_SALAMANDRAE/BRACHYCOELIUM SALAMANDRAE current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/BRACHYCOELIUM_SALAMANDRAE/future-maps/future.pdf",
        url: "/BRACHYCOELIUM_SALAMANDRAE",
        urlCSV: "pdf/web/species-pages/BRACHYCOELIUM_SALAMANDRAE/BRACHYCOELIUM SALAMANDRAE pearldata.csv"
    };
    res.render('BRACHYCOELIUM_SALAMANDRAE', renderObj);
});

// Grab data from document
routerBRACHYCOELIUM_SALAMANDRAE.post('/', function(req, res) {

    res.end();
});

module.exports = routerBRACHYCOELIUM_SALAMANDRAE;
