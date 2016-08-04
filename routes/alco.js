var express = require('express');
var routerAlco = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAlco.get('/', function(req, res) {
    var futureDisp = ["-0.93%", "-0.52%", "-0.23%", "-0.15%", "-0.29%", "-0.09%", "-0.09%", "-0.30%", "-0.27%", "-0.17%", "-3.42%", "-0.79%", "-0.51%", "-0.36%", "-0.43%", "-0.47%", "-0.56%", "-0.36%"];

    var futureNDisp = ["60.87%", "107.81%", "35.23%", "42.63%", "54.30%", "96.80%", "27.51%", "40.36%", "42.16%", "71.87%", "33.93%", "58.78%", "48.20%", "97.17%", "38.97%", "65.25%", "66.18%", "141.58%"];

    var renderObj = {
        title: "Alloglossidium Corti",
        clade: "Trematoda",
        source: "GBIF",
        currMap: "pdf/web/viewer.html?file=species-pages/alco/ALLOGLOSSIDIUM CORTI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/alco/future-maps/ALLOGLOSSIDIUM CORTI future.pdf",
        futureDisp: futureDisp,
        futureNDisp: futureNDisp,
        crStatus: "CR",
        tss: "0.73",
        auc: "0.91",
        dataQuality: "Fair",
        modelQuality: "Good",
        url: "/agag"
    };
    res.render('Alco', renderObj);
});

// Grab data from document
routerAlco.post('/', function(req, res) {

    res.end();
});

module.exports = routerAlco;
