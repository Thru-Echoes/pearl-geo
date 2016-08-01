var express = require('express');
var routerAtlas = express.Router();

routerAtlas.get('/', function(req, res) {
    res.render('atlas', {
        title: "Species Atlas"
    });
});

module.exports = routerAtlas;
