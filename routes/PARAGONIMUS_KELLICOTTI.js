var express = require('express');
var routerPARAGONIMUS_KELLICOTTI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerPARAGONIMUS_KELLICOTTI.get('/', function(req, res) {

    var renderObj = {
        title: "Paragonimus kellicotti",
        currMap: "pdf/web/viewer.html?file=species-pages/PARAGONIMUS_KELLICOTTI/PARAGONIMUS KELLICOTTI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/PARAGONIMUS_KELLICOTTI/future-maps/future.pdf",
        url: "/PARAGONIMUS_KELLICOTTI",
        urlCSV: "pdf/web/species-pages/PARAGONIMUS_KELLICOTTI/PARAGONIMUS KELLICOTTI pearldata.csv"
    };
    res.render('PARAGONIMUS_KELLICOTTI', renderObj);
});

// Grab data from document
routerPARAGONIMUS_KELLICOTTI.post('/', function(req, res) {

    res.end();
});

module.exports = routerPARAGONIMUS_KELLICOTTI;
