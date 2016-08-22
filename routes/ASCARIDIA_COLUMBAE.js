var express = require('express');
var routerASCARIDIA_COLUMBAE = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerASCARIDIA_COLUMBAE.get('/', function(req, res) {

    var renderObj = {
        title: "Ascaridia columbae",
        currMap: "pdf/web/viewer.html?file=species-pages/ASCARIDIA_COLUMBAE/ASCARIDIA COLUMBAE current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/ASCARIDIA_COLUMBAE/future-maps/future.pdf",
        url: "/ASCARIDIA_COLUMBAE",
        urlCSV: "pdf/web/species-pages/ASCARIDIA_COLUMBAE/ASCARIDIA COLUMBAE pearldata.csv"
    };
    res.render('ASCARIDIA_COLUMBAE', renderObj);
});

// Grab data from document
routerASCARIDIA_COLUMBAE.post('/', function(req, res) {

    res.end();
});

module.exports = routerASCARIDIA_COLUMBAE;
