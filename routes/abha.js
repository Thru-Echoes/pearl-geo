var express = require('express');
var routerAbha = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAbha.get('/', function(req, res) {

    var futureDisp = ["-29.90%", "-69.91%", "-20.57%", "-41.22%", "-36.28%", "-69.62%", "-14.09%", "-23.07%", "-15.68%", "-22.73%", "-32.35%", "-65.80%", "-38.47%", "-85.44%", "-21.05%", "-54.57%", "-22.20%", "-68.85%"];

    var futureNDisp = ["-22.47%", "-63.12%", "-11.51%", "-37.30%", "-32.49%", "-64.76%", "-2.47%", "-17.25%", "1.46%", "-9.63%", "-23.23%", "-61.54%", "-32.43%", "-84.64%", "-12.51%", "-49.64%", "-6.26%", "-65.66%"];

    var renderObj = {
        title: "Abbreviata hastaspicula",
        clade: "Nematoda",
        source: "GBIF",
        currMap: "pdf/web/viewer.html?file=species-pages/abha/ABBREVIATA HASTASPICULA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/abha/future-maps/ABBREVIATA HASTASPICULA future.pdf",
        futureDisp: futureDisp,
        futureNDisp: futureNDisp,
        crStatus: "CR",
        tss: "0.52",
        auc: "0.75",
        dataQuality: "Fair",
        modelQuality: "Good",
        url: "/abha"
    };
    res.render('abha', renderObj);
});

// Grab data from document
routerAbha.post('/', function(req, res) {

    res.end();
});

module.exports = routerAbha;
