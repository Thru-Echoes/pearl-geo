var express = require('express');
var routerCYATHOSTOMUM_CATINATUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCYATHOSTOMUM_CATINATUM.get('/', function(req, res) {

    var renderObj = {
        title: "Cyathostomum catinatum",
        currMap: "pdf/web/viewer.html?file=species-pages/CYATHOSTOMUM_CATINATUM/CYATHOSTOMUM CATINATUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/CYATHOSTOMUM_CATINATUM/future-maps/future.pdf",
        url: "/CYATHOSTOMUM_CATINATUM",
        urlCSV: "pdf/web/species-pages/CYATHOSTOMUM_CATINATUM/CYATHOSTOMUM CATINATUM pearldata.csv"
    };
    res.render('CYATHOSTOMUM_CATINATUM', renderObj);
});

// Grab data from document
routerCYATHOSTOMUM_CATINATUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerCYATHOSTOMUM_CATINATUM;
