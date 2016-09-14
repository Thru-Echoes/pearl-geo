var express = require('express');
var routerNEOECHINORHYNCHUS_GOLVANI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerNEOECHINORHYNCHUS_GOLVANI.get('/', function(req, res) {

    var renderObj = {
        title: "Neoechinorhynchus golvani",
        currMap: "pdf/web/viewer.html?file=species-pages/NEOECHINORHYNCHUS_GOLVANI/NEOECHINORHYNCHUS GOLVANI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/NEOECHINORHYNCHUS_GOLVANI/future-maps/future.pdf",
        url: "/NEOECHINORHYNCHUS_GOLVANI",
        urlCSV: "pdf/web/species-pages/NEOECHINORHYNCHUS_GOLVANI/NEOECHINORHYNCHUS GOLVANI pearldata.csv"
    };
    res.render('NEOECHINORHYNCHUS_GOLVANI', renderObj);
});

// Grab data from document
routerNEOECHINORHYNCHUS_GOLVANI.post('/', function(req, res) {

    res.end();
});

module.exports = routerNEOECHINORHYNCHUS_GOLVANI;
