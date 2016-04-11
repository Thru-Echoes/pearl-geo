var express = require('express');
var routerSobbat = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

/*router.post('/', function(req, res) {
    req.locals.numClass = req.body.numClass;
    console.log("\nIn metapop.js - in .post()\n");
})*/

routerSobbat.get('/', function(req, res) {
    console.log("\nIn sobbat.js - in .get()\n");
    res.render('sobbat', {
        title: "Species: Sob. Bat."
    });
});

// Grab data from document
routerSobbat.post('/', function(req, res) {

    global.nNode = req.body.numNode;
    global.nClass = req.body.numClass;
    global.isSex = req.body.isSex;
    global.isYoung = req.body.isYoung;
    global.isOld = req.body.isOld;
    global.isMM = req.body.isMM;
    global.isDemo = req.body.isDemo;
    global.isEnvir = req.body.isEnvir;

    res.end();
});

module.exports = routerSobbat;
