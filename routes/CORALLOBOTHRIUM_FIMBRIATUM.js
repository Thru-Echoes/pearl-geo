var express = require('express');
var routerCORALLOBOTHRIUM_FIMBRIATUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerCORALLOBOTHRIUM_FIMBRIATUM.get('/', function(req, res) {

    var renderObj = {
        title: "Coralllobothrium fimbriatum",
        currMap: "pdf/web/viewer.html?file=species-pages/CORALLOBOTHRIUM_FIMBRIATUM/CORALLOBOTHRIUM FIMBRIATUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/CORALLOBOTHRIUM_FIMBRIATUM/future-maps/future.pdf",
        url: "/CORALLOBOTHRIUM_FIMBRIATUM",
        urlCSV: "pdf/web/species-pages/CORALLOBOTHRIUM_FIMBRIATUM/CORALLOBOTHRIUM FIMBRIATUM pearldata.csv"
    };
    res.render('CORALLOBOTHRIUM_FIMBRIATUM', renderObj);
});

// Grab data from document
routerCORALLOBOTHRIUM_FIMBRIATUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerCORALLOBOTHRIUM_FIMBRIATUM;
