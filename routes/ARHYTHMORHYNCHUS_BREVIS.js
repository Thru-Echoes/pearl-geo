var express = require('express');
var routerARHYTHMORHYNCHUS_BREVIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerARHYTHMORHYNCHUS_BREVIS.get('/', function(req, res) {

    var renderObj = {
        title: "Arhythmorhynchus brevis",
        currMap: "pdf/web/viewer.html?file=species-pages/ARHYTHMORHYNCHUS_BREVIS/ARHYTHMORHYNCHUS BREVIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/ARHYTHMORHYNCHUS_BREVIS/future-maps/future.pdf",
        url: "/ARHYTHMORHYNCHUS_BREVIS",
        urlCSV: "pdf/web/species-pages/ARHYTHMORHYNCHUS_BREVIS/ARHYTHMORHYNCHUS BREVIS pearldata.csv"
    };
    res.render('ARHYTHMORHYNCHUS_BREVIS', renderObj);
});

// Grab data from document
routerARHYTHMORHYNCHUS_BREVIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerARHYTHMORHYNCHUS_BREVIS;
