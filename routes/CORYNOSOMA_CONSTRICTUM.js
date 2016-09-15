var express = require('express');
var routerCORYNOSOMA_CONSTRICTUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCORYNOSOMA_CONSTRICTUM.get('/', function(req, res) {

    var renderObj = {
        title: "Corynosoma constrictum",
        currMap: "pdf/web/viewer.html?file=species-pages/CORYNOSOMA_CONSTRICTUM/CORYNOSOMA CONSTRICTUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/CORYNOSOMA_CONSTRICTUM/future-maps/future.pdf",
        url: "/CORYNOSOMA_CONSTRICTUM",
        urlCSV: "pdf/web/species-pages/CORYNOSOMA_CONSTRICTUM/CORYNOSOMA CONSTRICTUM pearldata.csv"
    };
    res.render('CORYNOSOMA_CONSTRICTUM', renderObj);
});

// Grab data from document
routerCORYNOSOMA_CONSTRICTUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerCORYNOSOMA_CONSTRICTUM;
