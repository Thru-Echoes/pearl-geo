var express = require('express');
var routerPOLYGENIS_GWYNI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerPOLYGENIS_GWYNI.get('/', function(req, res) {

    var renderObj = {
        title: "Polygenis gwyni",
        currMap: "pdf/web/viewer.html?file=species-pages/POLYGENIS_GWYNI/POLYGENIS GWYNI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/POLYGENIS_GWYNI/future-maps/future.pdf",
        url: "/POLYGENIS_GWYNI",
        urlCSV: "pdf/web/species-pages/POLYGENIS_GWYNI/POLYGENIS GWYNI pearldata.csv"
    };
    res.render('POLYGENIS_GWYNI', renderObj);
});

// Grab data from document
routerPOLYGENIS_GWYNI.post('/', function(req, res) {

    res.end();
});

module.exports = routerPOLYGENIS_GWYNI;
