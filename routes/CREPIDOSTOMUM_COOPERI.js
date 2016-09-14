var express = require('express');
var routerCREPIDOSTOMUM_COOPERI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCREPIDOSTOMUM_COOPERI.get('/', function(req, res) {

    var renderObj = {
        title: "Crepidostomum cooperi",
        currMap: "pdf/web/viewer.html?file=species-pages/CREPIDOSTOMUM_COOPERI/CREPIDOSTOMUM COOPERI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/CREPIDOSTOMUM_COOPERI/future-maps/future.pdf",
        url: "/CREPIDOSTOMUM_COOPERI",
        urlCSV: "pdf/web/species-pages/CREPIDOSTOMUM_COOPERI/CREPIDOSTOMUM COOPERI pearldata.csv"
    };
    res.render('CREPIDOSTOMUM_COOPERI', renderObj);
});

// Grab data from document
routerCREPIDOSTOMUM_COOPERI.post('/', function(req, res) {

    res.end();
});

module.exports = routerCREPIDOSTOMUM_COOPERI;
