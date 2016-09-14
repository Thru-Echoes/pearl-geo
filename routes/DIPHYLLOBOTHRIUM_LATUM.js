var express = require('express');
var routerDIPHYLLOBOTHRIUM_LATUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerDIPHYLLOBOTHRIUM_LATUM.get('/', function(req, res) {

    var renderObj = {
        title: "Diphyllobothrium latum",
        currMap: "pdf/web/viewer.html?file=species-pages/DIPHYLLOBOTHRIUM_LATUM/DIPHYLLOBOTHRIUM LATUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/DIPHYLLOBOTHRIUM_LATUM/future-maps/future.pdf",
        url: "/DIPHYLLOBOTHRIUM_LATUM",
        urlCSV: "pdf/web/species-pages/DIPHYLLOBOTHRIUM_LATUM/DIPHYLLOBOTHRIUM LATUM pearldata.csv"
    };
    res.render('DIPHYLLOBOTHRIUM_LATUM', renderObj);
});

// Grab data from document
routerDIPHYLLOBOTHRIUM_LATUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerDIPHYLLOBOTHRIUM_LATUM;
