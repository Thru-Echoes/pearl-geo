var express = require('express');
var routerZYGOCOTYLE_LUNATA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerZYGOCOTYLE_LUNATA.get('/', function(req, res) {

    var renderObj = {
        title: "Zygocotyle lunata",
        currMap: "pdf/web/viewer.html?file=species-pages/ZYGOCOTYLE_LUNATA/ZYGOCOTYLE LUNATA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/ZYGOCOTYLE_LUNATA/future-maps/future.pdf",
        url: "/ZYGOCOTYLE_LUNATA",
        urlCSV: "pdf/web/species-pages/ZYGOCOTYLE_LUNATA/ZYGOCOTYLE LUNATA pearldata.csv"
    };
    res.render('ZYGOCOTYLE_LUNATA', renderObj);
});

// Grab data from document
routerZYGOCOTYLE_LUNATA.post('/', function(req, res) {

    res.end();
});

module.exports = routerZYGOCOTYLE_LUNATA;
