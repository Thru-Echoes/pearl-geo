var express = require('express');
var routerMEDIORHYNCHUS_GRANDIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerMEDIORHYNCHUS_GRANDIS.get('/', function(req, res) {

    var renderObj = {
        title: "Mediorhynchus grandis",
        currMap: "pdf/web/viewer.html?file=species-pages/MEDIORHYNCHUS_GRANDIS/MEDIORHYNCHUS GRANDIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/MEDIORHYNCHUS_GRANDIS/future-maps/future.pdf",
        url: "/MEDIORHYNCHUS_GRANDIS",
        urlCSV: "pdf/web/species-pages/MEDIORHYNCHUS_GRANDIS/MEDIORHYNCHUS GRANDIS pearldata.csv"
    };
    res.render('MEDIORHYNCHUS_GRANDIS', renderObj);
});

// Grab data from document
routerMEDIORHYNCHUS_GRANDIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerMEDIORHYNCHUS_GRANDIS;
