var express = require('express');
var routerMYLONCHULUS_BRACHYURIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerMYLONCHULUS_BRACHYURIS.get('/', function(req, res) {

    var renderObj = {
        title: "Mylonchulus brachyuris",
        currMap: "pdf/web/viewer.html?file=species-pages/MYLONCHULUS_BRACHYURIS/MYLONCHULUS BRACHYURIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/MYLONCHULUS_BRACHYURIS/future-maps/future.pdf",
        url: "/MYLONCHULUS_BRACHYURIS",
        urlCSV: "pdf/web/species-pages/MYLONCHULUS_BRACHYURIS/MYLONCHULUS BRACHYURIS pearldata.csv"
    };
    res.render('MYLONCHULUS_BRACHYURIS', renderObj);
});

// Grab data from document
routerMYLONCHULUS_BRACHYURIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerMYLONCHULUS_BRACHYURIS;
