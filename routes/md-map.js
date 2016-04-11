var express = require('express');
var routerMD = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

/*router.post('/', function(req, res) {
    req.locals.numClass = req.body.numClass;
    console.log("\nIn Foobarpop.js - in .post()\n");
})*/

routerMD.get('/', function(req, res) {
    console.log("\nIn md-map.js - in .get()\n");
    res.render('MD-map', {
        title: "md-map"
    });
});

// Grab data from document
routerMD.post('/', function(req, res) {
    res.end();
});

module.exports = routerMD;
