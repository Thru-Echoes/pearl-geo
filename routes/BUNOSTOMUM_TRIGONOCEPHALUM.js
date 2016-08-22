var express = require('express');
var routerBUNOSTOMUM_TRIGONOCEPHALUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerBUNOSTOMUM_TRIGONOCEPHALUM.get('/', function(req, res) {

    var renderObj = {
        title: "Bunostomum trigonocephalum",
        currMap: "pdf/web/viewer.html?file=species-pages/BUNOSTOMUM_TRIGONOCEPHALUM/BUNOSTOMUM TRIGONOCEPHALUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/BUNOSTOMUM_TRIGONOCEPHALUM/future-maps/future.pdf",
        url: "/BUNOSTOMUM_TRIGONOCEPHALUM",
        urlCSV: "pdf/web/species-pages/BUNOSTOMUM_TRIGONOCEPHALUM/BUNOSTOMUM TRIGONOCEPHALUM pearldata.csv"
    };
    res.render('BUNOSTOMUM_TRIGONOCEPHALUM', renderObj);
});

// Grab data from document
routerBUNOSTOMUM_TRIGONOCEPHALUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerBUNOSTOMUM_TRIGONOCEPHALUM;
