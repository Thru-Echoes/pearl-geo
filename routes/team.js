var express = require('express');
var routerTeam = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerTeam.get('/', function(req, res) {
    res.render('team', {
        title: "Team Page"
    });
});

module.exports = routerTeam;
