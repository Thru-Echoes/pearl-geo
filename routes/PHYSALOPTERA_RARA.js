var express = require('express');
var routerPHYSALOPTERA_RARA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerPHYSALOPTERA_RARA.get('/', function(req, res) {

    var renderObj = {
        title: "Physaloptera rara",
        currMap: "pdf/web/viewer.html?file=species-pages/PHYSALOPTERA_RARA/PHYSALOPTERA RARA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/PHYSALOPTERA_RARA/future-maps/future.pdf",
        url: "/PHYSALOPTERA_RARA",
        urlCSV: "pdf/web/species-pages/PHYSALOPTERA_RARA/PHYSALOPTERA RARA pearldata.csv"
    };
    res.render('PHYSALOPTERA_RARA', renderObj);
});

// Grab data from document
routerPHYSALOPTERA_RARA.post('/', function(req, res) {

    res.end();
});

module.exports = routerPHYSALOPTERA_RARA;
