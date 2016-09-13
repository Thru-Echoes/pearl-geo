var express = require('express');
var routerLABIOSTOMUM_RAUSCHI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerLABIOSTOMUM_RAUSCHI.get('/', function(req, res) {

    var renderObj = {
        title: "Labiostomum rauschi",
        currMap: "pdf/web/viewer.html?file=species-pages/LABIOSTOMUM_RAUSCHI/LABIOSTOMUM RAUSCHI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/LABIOSTOMUM_RAUSCHI/future-maps/future.pdf",
        url: "/LABIOSTOMUM_RAUSCHI",
        urlCSV: "pdf/web/species-pages/LABIOSTOMUM_RAUSCHI/LABIOSTOMUM RAUSCHI pearldata.csv"
    };
    res.render('LABIOSTOMUM_RAUSCHI', renderObj);
});

// Grab data from document
routerLABIOSTOMUM_RAUSCHI.post('/', function(req, res) {

    res.end();
});

module.exports = routerLABIOSTOMUM_RAUSCHI;
