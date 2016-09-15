var express = require('express');
var routerSETARIA_YEHI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerSETARIA_YEHI.get('/', function(req, res) {

    var renderObj = {
        title: "Setaria yehi",
        currMap: "pdf/web/viewer.html?file=species-pages/SETARIA_YEHI/SETARIA YEHI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/SETARIA_YEHI/future-maps/future.pdf",
        url: "/SETARIA_YEHI",
        urlCSV: "pdf/web/species-pages/SETARIA_YEHI/SETARIA YEHI pearldata.csv"
    };
    res.render('SETARIA_YEHI', renderObj);
});

// Grab data from document
routerSETARIA_YEHI.post('/', function(req, res) {

    res.end();
});

module.exports = routerSETARIA_YEHI;
