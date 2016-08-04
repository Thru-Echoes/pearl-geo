var express = require('express');
var routerAbba = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAbba.get('/', function(req, res) {

    var futureDisp = ["-35.87%", "-65.45%", "-41.31%", "-44.24%", "-52.93%", "-53.35%", "-19.34%", "-29.40%", "-27.90%", "-43.80%", "-37.88%", "-56.99%", "-44.04%", "-67.58%", "-30.49%", "-41.52%", "-49.37%", "-62.33%"];

    var futureNDisp = ["-29.55%", "-58.14%", "-34.22%", "-32.86%", "-41.15%", "-45.19%", "-16.78%", "-27.15%", "-24.88%", "-42.30%", "-28.38%", "-51.00%", "-33.30%", "-58.14%", "-25.78%", "-33.26%", "-37.42%", "-54.40%"];

    var renderObj = {
        title: "Abbreviata bancrofti",
        clade: "Nematoda",
        source: "GBIF",
        currMap: "pdf/web/viewer.html?file=species-pages/abba/ABBREVIATA BANCROFTI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/abba/future-maps/ABBREVIATA BANCROFTI future.pdf",
        futureDisp: futureDisp,
        futureNDisp: futureNDisp,
        crStatus: "CR",
        tss: "0.71",
        auc: "0.90",
        dataQuality: "Fair",
        modelQuality: "Good",
        url: "/abba"
    };
    res.render('abba', renderObj);
});

// Grab data from document
routerAbba.post('/', function(req, res) {

    res.end();
});

module.exports = routerAbba;
