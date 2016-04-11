var express = require('express');
var routerFoobar = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

/*router.post('/', function(req, res) {
    req.locals.numClass = req.body.numClass;
    console.log("\nIn Foobarpop.js - in .post()\n");
})*/

routerFoobar.get('/', function(req, res) {
    console.log("\nIn Foobar.js - in .get()\n");
    res.render('foobar', {
        title: "Foo Bar"
    });
});

// Grab data from document
routerFoobar.post('/', function(req, res) {

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

module.exports = routerFoobar;
