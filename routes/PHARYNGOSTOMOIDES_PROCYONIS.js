var express = require('express');
var routerPHARYNGOSTOMOIDES_PROCYONIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerPHARYNGOSTOMOIDES_PROCYONIS.get('/', function(req, res) {

    var renderObj = {
        title: "Pharyngostomoides procyonis",
        currMap: "pdf/web/viewer.html?file=species-pages/PHARYNGOSTOMOIDES_PROCYONIS/PHARYNGOSTOMOIDES PROCYONIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/PHARYNGOSTOMOIDES_PROCYONIS/future-maps/future.pdf",
        url: "/PHARYNGOSTOMOIDES_PROCYONIS",
        urlCSV: "pdf/web/species-pages/PHARYNGOSTOMOIDES_PROCYONIS/PHARYNGOSTOMOIDES PROCYONIS pearldata.csv"
    };
    res.render('PHARYNGOSTOMOIDES_PROCYONIS', renderObj);
});

// Grab data from document
routerPHARYNGOSTOMOIDES_PROCYONIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerPHARYNGOSTOMOIDES_PROCYONIS;
