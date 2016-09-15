var express = require('express');
var routerCREPIDOSTOMUM_FARIONIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCREPIDOSTOMUM_FARIONIS.get('/', function(req, res) {

    var renderObj = {
        title: "Crepidostomum farionis",
        currMap: "pdf/web/viewer.html?file=species-pages/CREPIDOSTOMUM_FARIONIS/CREPIDOSTOMUM FARIONIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/CREPIDOSTOMUM_FARIONIS/future-maps/future.pdf",
        url: "/CREPIDOSTOMUM_FARIONIS",
        urlCSV: "pdf/web/species-pages/CREPIDOSTOMUM_FARIONIS/CREPIDOSTOMUM FARIONIS pearldata.csv"
    };
    res.render('CREPIDOSTOMUM_FARIONIS', renderObj);
});

// Grab data from document
routerCREPIDOSTOMUM_FARIONIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerCREPIDOSTOMUM_FARIONIS;
