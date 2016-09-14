var express = require('express');
var routerTOBRILUS_GRACILIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerTOBRILUS_GRACILIS.get('/', function(req, res) {

    var renderObj = {
        title: "Tobrilus gracilis",
        currMap: "pdf/web/viewer.html?file=species-pages/TOBRILUS_GRACILIS/TOBRILUS GRACILIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/TOBRILUS_GRACILIS/future-maps/future.pdf",
        url: "/TOBRILUS_GRACILIS",
        urlCSV: "pdf/web/species-pages/TOBRILUS_GRACILIS/TOBRILUS GRACILIS pearldata.csv"
    };
    res.render('TOBRILUS_GRACILIS', renderObj);
});

// Grab data from document
routerTOBRILUS_GRACILIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerTOBRILUS_GRACILIS;
