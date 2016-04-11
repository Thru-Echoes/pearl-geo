var express = require('express');
var routerMeta = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

/*router.post('/', function(req, res) {
    req.locals.numClass = req.body.numClass;
    console.log("\nIn metapop.js - in .post()\n");
})*/

routerMeta.get('/', function(req, res) {
    console.log("\nIn metapop.js - in .get()\n");
    res.render('metapop', {
        title: "metapop"
    });
});

// Grab data from document
routerMeta.post('/', function (req, res) {

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

module.exports = routerMeta;
