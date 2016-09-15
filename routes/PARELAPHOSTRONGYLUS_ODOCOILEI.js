var express = require('express');
var routerPARELAPHOSTRONGYLUS_ODOCOILEI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerPARELAPHOSTRONGYLUS_ODOCOILEI.get('/', function(req, res) {

    var renderObj = {
        title: "Parelaphostrongylus odocoilei",
        currMap: "pdf/web/viewer.html?file=species-pages/PARELAPHOSTRONGYLUS_ODOCOILEI/PARELAPHOSTRONGYLUS ODOCOILEI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/PARELAPHOSTRONGYLUS_ODOCOILEI/future-maps/future.pdf",
        url: "/PARELAPHOSTRONGYLUS_ODOCOILEI",
        urlCSV: "pdf/web/species-pages/PARELAPHOSTRONGYLUS_ODOCOILEI/PARELAPHOSTRONGYLUS ODOCOILEI pearldata.csv"
    };
    res.render('PARELAPHOSTRONGYLUS_ODOCOILEI', renderObj);
});

// Grab data from document
routerPARELAPHOSTRONGYLUS_ODOCOILEI.post('/', function(req, res) {

    res.end();
});

module.exports = routerPARELAPHOSTRONGYLUS_ODOCOILEI;
