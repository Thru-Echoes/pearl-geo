var express = require('express');
var routerCREPIDOSTOMUM_CORNUTUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCREPIDOSTOMUM_CORNUTUM.get('/', function(req, res) {

    var renderObj = {
        title: "Crepidostomum cornutum",
        currMap: "pdf/web/viewer.html?file=species-pages/CREPIDOSTOMUM_CORNUTUM/CREPIDOSTOMUM CORNUTUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/CREPIDOSTOMUM_CORNUTUM/future-maps/future.pdf",
        url: "/CREPIDOSTOMUM_CORNUTUM",
        urlCSV: "pdf/web/species-pages/CREPIDOSTOMUM_CORNUTUM/CREPIDOSTOMUM CORNUTUM pearldata.csv"
    };
    res.render('CREPIDOSTOMUM_CORNUTUM', renderObj);
});

// Grab data from document
routerCREPIDOSTOMUM_CORNUTUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerCREPIDOSTOMUM_CORNUTUM;
