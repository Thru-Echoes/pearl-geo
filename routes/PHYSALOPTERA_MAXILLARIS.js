var express = require('express');
var routerPHYSALOPTERA_MAXILLARIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerPHYSALOPTERA_MAXILLARIS.get('/', function(req, res) {

    var renderObj = {
        title: "Physaloptera maxillaris",
        currMap: "pdf/web/viewer.html?file=species-pages/PHYSALOPTERA_MAXILLARIS/PHYSALOPTERA MAXILLARIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/PHYSALOPTERA_MAXILLARIS/future-maps/future.pdf",
        url: "/PHYSALOPTERA_MAXILLARIS",
        urlCSV: "pdf/web/species-pages/PHYSALOPTERA_MAXILLARIS/PHYSALOPTERA MAXILLARIS pearldata.csv"
    };
    res.render('PHYSALOPTERA_MAXILLARIS', renderObj);
});

// Grab data from document
routerPHYSALOPTERA_MAXILLARIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerPHYSALOPTERA_MAXILLARIS;
