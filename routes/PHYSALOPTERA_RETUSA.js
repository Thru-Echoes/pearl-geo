var express = require('express');
var routerPHYSALOPTERA_RETUSA = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerPHYSALOPTERA_RETUSA.get('/', function(req, res) {

    var renderObj = {
        title: "Physaloptera retusa",
        currMap: "pdf/web/viewer.html?file=species-pages/PHYSALOPTERA_RETUSA/PHYSALOPTERA RETUSA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/PHYSALOPTERA_RETUSA/future-maps/future.pdf",
        url: "/PHYSALOPTERA_RETUSA",
        urlCSV: "pdf/web/species-pages/PHYSALOPTERA_RETUSA/PHYSALOPTERA RETUSA pearldata.csv"
    };
    res.render('PHYSALOPTERA_RETUSA', renderObj);
});

// Grab data from document
routerPHYSALOPTERA_RETUSA.post('/', function(req, res) {

    res.end();
});

module.exports = routerPHYSALOPTERA_RETUSA;
