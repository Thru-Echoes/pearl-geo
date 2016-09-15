var express = require('express');
var routerPARAMPHISTOMUM_MICROBOTHRIOIDES = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerPARAMPHISTOMUM_MICROBOTHRIOIDES.get('/', function(req, res) {

    var renderObj = {
        title: "Paramphistomum microbothrioides",
        currMap: "pdf/web/viewer.html?file=species-pages/PARAMPHISTOMUM_MICROBOTHRIOIDES/PARAMPHISTOMUM MICROBOTHRIOIDES current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/PARAMPHISTOMUM_MICROBOTHRIOIDES/future-maps/future.pdf",
        url: "/PARAMPHISTOMUM_MICROBOTHRIOIDES",
        urlCSV: "pdf/web/species-pages/PARAMPHISTOMUM_MICROBOTHRIOIDES/PARAMPHISTOMUM MICROBOTHRIOIDES pearldata.csv"
    };
    res.render('PARAMPHISTOMUM_MICROBOTHRIOIDES', renderObj);
});

// Grab data from document
routerPARAMPHISTOMUM_MICROBOTHRIOIDES.post('/', function(req, res) {

    res.end();
});

module.exports = routerPARAMPHISTOMUM_MICROBOTHRIOIDES;
