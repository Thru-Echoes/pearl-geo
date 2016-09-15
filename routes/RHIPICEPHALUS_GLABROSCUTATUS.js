var express = require('express');
var routerRHIPICEPHALUS_GLABROSCUTATUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHIPICEPHALUS_GLABROSCUTATUS.get('/', function(req, res) {

    var renderObj = {
        title: "Rhipicephalus glabroscutatus",
        currMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_GLABROSCUTATUS/RHIPICEPHALUS GLABROSCUTATUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_GLABROSCUTATUS/future-maps/future.pdf",
        url: "/RHIPICEPHALUS_GLABROSCUTATUS",
        urlCSV: "pdf/web/species-pages/RHIPICEPHALUS_GLABROSCUTATUS/RHIPICEPHALUS GLABROSCUTATUS pearldata.csv"
    };
    res.render('RHIPICEPHALUS_GLABROSCUTATUS', renderObj);
});

// Grab data from document
routerRHIPICEPHALUS_GLABROSCUTATUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHIPICEPHALUS_GLABROSCUTATUS;
