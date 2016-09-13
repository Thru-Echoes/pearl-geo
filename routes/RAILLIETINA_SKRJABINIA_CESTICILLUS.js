var express = require('express');
var routerRAILLIETINA_SKRJABINIA_CESTICILLUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRAILLIETINA_SKRJABINIA_CESTICILLUS.get('/', function(req, res) {

    var renderObj = {
        title: "Raillietina skrjabinia cesticillus",
        currMap: "pdf/web/viewer.html?file=species-pages/RAILLIETINA_SKRJABINIA_CESTICILLUS/RAILLIETINA SKRJABINIA CESTICILLUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RAILLIETINA_SKRJABINIA_CESTICILLUS/future-maps/future.pdf",
        url: "/RAILLIETINA_SKRJABINIA_CESTICILLUS",
        urlCSV: "pdf/web/species-pages/RAILLIETINA_SKRJABINIA_CESTICILLUS/RAILLIETINA SKRJABINIA CESTICILLUS pearldata.csv"
    };
    res.render('RAILLIETINA_SKRJABINIA_CESTICILLUS', renderObj);
});

// Grab data from document
routerRAILLIETINA_SKRJABINIA_CESTICILLUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerRAILLIETINA_SKRJABINIA_CESTICILLUS;
