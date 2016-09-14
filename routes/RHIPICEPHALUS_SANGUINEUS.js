var express = require('express');
var routerRHIPICEPHALUS_SANGUINEUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHIPICEPHALUS_SANGUINEUS.get('/', function(req, res) {

    var renderObj = {
        title: "Rhipicephalus sanguineus",
        currMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_SANGUINEUS/RHIPICEPHALUS SANGUINEUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_SANGUINEUS/future-maps/future.pdf",
        url: "/RHIPICEPHALUS_SANGUINEUS",
        urlCSV: "pdf/web/species-pages/RHIPICEPHALUS_SANGUINEUS/RHIPICEPHALUS SANGUINEUS pearldata.csv"
    };
    res.render('RHIPICEPHALUS_SANGUINEUS', renderObj);
});

// Grab data from document
routerRHIPICEPHALUS_SANGUINEUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHIPICEPHALUS_SANGUINEUS;
