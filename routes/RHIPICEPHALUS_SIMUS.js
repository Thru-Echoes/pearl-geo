var express = require('express');
var routerRHIPICEPHALUS_SIMUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHIPICEPHALUS_SIMUS.get('/', function(req, res) {

    var renderObj = {
        title: "Rhipicephalus simus",
        currMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_SIMUS/RHIPICEPHALUS SIMUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_SIMUS/future-maps/future.pdf",
        url: "/RHIPICEPHALUS_SIMUS",
        urlCSV: "pdf/web/species-pages/RHIPICEPHALUS_SIMUS/RHIPICEPHALUS SIMUS pearldata.csv"
    };
    res.render('RHIPICEPHALUS_SIMUS', renderObj);
});

// Grab data from document
routerRHIPICEPHALUS_SIMUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHIPICEPHALUS_SIMUS;
