var express = require('express');
var routerAmam = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAmam.get('/', function(req, res) {

    var futureDisp = ["11%", "22%", "33%", "44%", "55%", "66%", "77%", "88%", "91%", "92%", "93%", "94%", "95%", "96%", "97%", "98%", "99%", "100%"];

    var futureNDisp = ["-11%", "-22%", "-33%", "-44%", "-55%", "-66%", "-77%", "-88%", "-91%", "-92%", "-93%", "-94%", "-95%", "-96%", "-97%", "-98%", "-99%", "-100%"];

    var renderObj = {
        title: "Amblyomma americanum",
        clade: "Ixodida",
        source: "GBIF USNPC",
        currMap: "pdf/web/viewer.html?file=species-pages/abba/ABBREVIATA BANCROFTI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/abba/future-maps/ABBREVIATA BANCROFTI future.pdf",
        futureDisp: futureDisp,
        futureNDisp: futureNDisp,
        crStatus: "CR",
        tss: "0.93",
        auc: "0.97",
        dataQuality: "Fair",
        modelQuality: "Good",
        url: "/amam"
    };
    res.render('Amam', renderObj);
});

// Grab data from document
routerAmam.post('/', function(req, res) {

    res.end();
});

module.exports = routerAmam;
