var express = require('express');
var routerMACRACANTHORHYNCHUS_INGENS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerMACRACANTHORHYNCHUS_INGENS.get('/', function(req, res) {

    var renderObj = {
        title: "Macracanthorhynchus ingens",
        currMap: "pdf/web/viewer.html?file=species-pages/MACRACANTHORHYNCHUS_INGENS/MACRACANTHORHYNCHUS INGENS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/MACRACANTHORHYNCHUS_INGENS/future-maps/future.pdf",
        url: "/MACRACANTHORHYNCHUS_INGENS",
        urlCSV: "pdf/web/species-pages/MACRACANTHORHYNCHUS_INGENS/MACRACANTHORHYNCHUS INGENS pearldata.csv"
    };
    res.render('MACRACANTHORHYNCHUS_INGENS', renderObj);
});

// Grab data from document
routerMACRACANTHORHYNCHUS_INGENS.post('/', function(req, res) {

    res.end();
});

module.exports = routerMACRACANTHORHYNCHUS_INGENS;
