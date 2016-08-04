var express = require('express');
var routerAgag = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAgag.get('/', function(req, res) {

    var futureDisp = ["-42.64%", "-67.72%", "-18.82%", "-20.52%", "-33.43%", "-41.59%", "-21.22%", "-25.86%", "-29.15%", "-45.32%", "-43.28%", "-55.74%", "-58.48%", "-68.86%", "-31.30%", "-48.16%", "-47.88%", "-64.59%"];

    var futureNDisp = ["-22.47%", "-63.12%", "-11.51%", "-37.30%", "-32.49%", "-64.76%", "-2.47%", "-17.25%", "1.46%", "-9.63%", "-23.23%", "-61.54%", "-32.43%", "-84.64%", "-12.51%", "-49.64%", "-6.26%", "-65.66%"];

    var renderObj = {
        title: "Aglenchus agricola",
        clade: "Nematoda",
        source: "GBIF",
        currMap: "pdf/web/viewer.html?file=species-pages/agag/AGLENCHUS AGRICOLA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/agag/future-maps/AGLENCHUS AGRICOLA future.pdf",
        futureDisp: futureDisp,
        futureNDisp: futureNDisp,
        crStatus: "CR",
        tss: "0.89",
        auc: "0.97",
        dataQuality: "Fair",
        modelQuality: "Good",
        url: "/agag"
    };
    res.render('Agag', renderObj);
});

// Grab data from document
routerAgag.post('/', function(req, res) {

    res.end();
});

module.exports = routerAgag;
