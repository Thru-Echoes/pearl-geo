var express = require('express');
var routerAbha = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAbha.get('/', function(req, res) {

    var futureDisp = ["11%", "22%", "33%", "44%", "55%", "66%", "77%", "88%", "91%", "92%", "93%", "94%", "95%", "96%", "97%", "98%", "99%", "100%"];

    var futureNDisp = ["-11%", "-22%", "-33%", "-44%", "-55%", "-66%", "-77%", "-88%", "-91%", "-92%", "-93%", "-94%", "-95%", "-96%", "-97%", "-98%", "-99%", "-100%"];

    var renderObj = {
        title: "Abbreviata hastaspicula",
        clade: "Nematoda",
        source: "GBIF",
        currMap: "pdf/web/viewer.html?file=species-pages/abha/ABBREVIATA HASTASPICULA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/abha/future-maps/ABBREVIATA HASTASPICULA future.pdf",
        futureDisp: futureDisp,
        futureNDisp: futureNDisp,
        crStatus: "CR",
        tss: "0.93",
        auc: "0.97",
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
