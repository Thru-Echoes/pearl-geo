var express = require('express');
var routerRHIPICEPHALUS_PRAVUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHIPICEPHALUS_PRAVUS.get('/', function(req, res) {

    var renderObj = {
        title: "Rhipicephalus pravus",
        currMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_PRAVUS/RHIPICEPHALUS PRAVUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_PRAVUS/future-maps/future.pdf",
        url: "/RHIPICEPHALUS_PRAVUS",
        urlCSV: "pdf/web/species-pages/RHIPICEPHALUS_PRAVUS/RHIPICEPHALUS PRAVUS pearldata.csv"
    };
    res.render('RHIPICEPHALUS_PRAVUS', renderObj);
});

// Grab data from document
routerRHIPICEPHALUS_PRAVUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHIPICEPHALUS_PRAVUS;
