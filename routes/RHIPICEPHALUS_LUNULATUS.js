var express = require('express');
var routerRHIPICEPHALUS_LUNULATUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHIPICEPHALUS_LUNULATUS.get('/', function(req, res) {

    var renderObj = {
        title: "Rhipicephalus lunulatus",
        currMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_LUNULATUS/RHIPICEPHALUS LUNULATUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_LUNULATUS/future-maps/future.pdf",
        url: "/RHIPICEPHALUS_LUNULATUS",
        urlCSV: "pdf/web/species-pages/RHIPICEPHALUS_LUNULATUS/RHIPICEPHALUS LUNULATUS pearldata.csv"
    };
    res.render('RHIPICEPHALUS_LUNULATUS', renderObj);
});

// Grab data from document
routerRHIPICEPHALUS_LUNULATUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHIPICEPHALUS_LUNULATUS;
