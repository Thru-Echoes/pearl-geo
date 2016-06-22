var express = require('express');
var routerTeam = express.Router();

routerTeam.get('/', function(req, res) {
    res.render('team', {
        title: "PEARL Team"
    });
});

module.exports = routerTeam;
