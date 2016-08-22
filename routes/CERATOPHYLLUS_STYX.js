var express = require('express');
var routerCERATOPHYLLUS_STYX = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCERATOPHYLLUS_STYX.get('/', function(req, res) {

    var renderObj = {
        title: "Ceratophyllus styx",
        currMap: "pdf/web/viewer.html?file=species-pages/CERATOPHYLLUS_STYX/CERATOPHYLLUS STYX current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/CERATOPHYLLUS_STYX/future-maps/future.pdf",
        url: "/CERATOPHYLLUS_STYX",
        urlCSV: "pdf/web/species-pages/CERATOPHYLLUS_STYX/CERATOPHYLLUS STYX pearldata.csv"
    };
    res.render('CERATOPHYLLUS_STYX', renderObj);
});

// Grab data from document
routerCERATOPHYLLUS_STYX.post('/', function(req, res) {

    res.end();
});

module.exports = routerCERATOPHYLLUS_STYX;
