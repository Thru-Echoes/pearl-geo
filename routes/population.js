var express = require('express');
var routerPop = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerPop.get('/', function(req, res, next) {

    var metaData = {
        nNode: global.nNode,
        nClass: global.nClass,
        isSex: global.isSex,
        isYoung: global.isYoung,
        isOld: global.isOld,
        isMM: global.isMM,
        isDemo: global.isDemo,
        isEnvir: global.isEnvir
    };

    console.log("\nIn population.js - metaData.nNode: " + metaData.nNode);
    console.log("In population.js - metaData.nClass: " + metaData.nClass);
    console.log("In population.js - metaData.isSex: " + metaData.isSex);
    console.log("In population.js - metaData.isYoung: " + metaData.isYoung);
    console.log("In population.js - metaData.isOld: " + metaData.isOld);
    console.log("In population.js - metaData.isMM: " + metaData.isMM);
    console.log("In population.js - metaData.isDemo: " + metaData.isDemo);
    console.log("In population.js - metaData.isEnvir: " + metaData.isEnvir + "\n");

    //console.log("\nIn population.js - metaData.numClass: " + metaData.numClass + "\n");

    res.render('population', {
        title : "population",
        metaData : metaData,
    });
    //res.send('Put some stuff here...');
});

// Grab data from document
routerPop.post('/', function (req, res) {

    global.mClassAll = req.body.mClassAll;
    global.fClassAll = req.body.fClassAll;
    global.bRatesAll = req.body.bRatesAll;
    global.msRatesAll = req.body.msRatesAll;
    global.fsRatesAll = req.body.fsRatesAll;

    res.end();
});

module.exports = routerPop;
