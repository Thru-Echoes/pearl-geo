var express = require('express');
var routerBAYLISASCARIS_PROCYONIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerBAYLISASCARIS_PROCYONIS.get('/', function(req, res) {

    var renderObj = {
        title: "Baylisascaris procyonis",
        currMap: "pdf/web/viewer.html?file=species-pages/BAYLISASCARIS_PROCYONIS/BAYLISASCARIS PROCYONIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/BAYLISASCARIS_PROCYONIS/future-maps/future.pdf",
        url: "/BAYLISASCARIS_PROCYONIS",
        urlCSV: "pdf/web/species-pages/BAYLISASCARIS_PROCYONIS/BAYLISASCARIS PROCYONIS pearldata.csv"
    };
    res.render('BAYLISASCARIS_PROCYONIS', renderObj);
});

// Grab data from document
routerBAYLISASCARIS_PROCYONIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerBAYLISASCARIS_PROCYONIS;
