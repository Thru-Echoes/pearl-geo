var express = require('express');
var routerBUNOSTOMUM_PHLEBOTOMUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerBUNOSTOMUM_PHLEBOTOMUM.get('/', function(req, res) {

    var renderObj = {
        title: "Bunostomum phlebotomum",
        currMap: "pdf/web/viewer.html?file=species-pages/BUNOSTOMUM_PHLEBOTOMUM/BUNOSTOMUM PHLEBOTOMUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/BUNOSTOMUM_PHLEBOTOMUM/future-maps/future.pdf",
        url: "/BUNOSTOMUM_PHLEBOTOMUM",
        urlCSV: "pdf/web/species-pages/BUNOSTOMUM_PHLEBOTOMUM/BUNOSTOMUM PHLEBOTOMUM pearldata.csv"
    };
    res.render('BUNOSTOMUM_PHLEBOTOMUM', renderObj);
});

// Grab data from document
routerBUNOSTOMUM_PHLEBOTOMUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerBUNOSTOMUM_PHLEBOTOMUM;
