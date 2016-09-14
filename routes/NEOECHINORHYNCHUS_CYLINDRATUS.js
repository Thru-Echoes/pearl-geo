var express = require('express');
var routerNEOECHINORHYNCHUS_CYLINDRATUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerNEOECHINORHYNCHUS_CYLINDRATUS.get('/', function(req, res) {

    var renderObj = {
        title: "Neoechinorhynchus cylindratus",
        currMap: "pdf/web/viewer.html?file=species-pages/NEOECHINORHYNCHUS_CYLINDRATUS/NEOECHINORHYNCHUS CYLINDRATUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/NEOECHINORHYNCHUS_CYLINDRATUS/future-maps/future.pdf",
        url: "/NEOECHINORHYNCHUS_CYLINDRATUS",
        urlCSV: "pdf/web/species-pages/NEOECHINORHYNCHUS_CYLINDRATUS/NEOECHINORHYNCHUS CYLINDRATUS pearldata.csv"
    };
    res.render('NEOECHINORHYNCHUS_CYLINDRATUS', renderObj);
});

// Grab data from document
routerNEOECHINORHYNCHUS_CYLINDRATUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerNEOECHINORHYNCHUS_CYLINDRATUS;
