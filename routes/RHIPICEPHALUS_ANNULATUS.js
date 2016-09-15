var express = require('express');
var routerRHIPICEPHALUS_ANNULATUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHIPICEPHALUS_ANNULATUS.get('/', function(req, res) {

    var renderObj = {
        title: "Rhipicephalus annulatus",
        currMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_ANNULATUS/RHIPICEPHALUS ANNULATUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_ANNULATUS/future-maps/future.pdf",
        url: "/RHIPICEPHALUS_ANNULATUS",
        urlCSV: "pdf/web/species-pages/RHIPICEPHALUS_ANNULATUS/RHIPICEPHALUS ANNULATUS pearldata.csv"
    };
    res.render('RHIPICEPHALUS_ANNULATUS', renderObj);
});

// Grab data from document
routerRHIPICEPHALUS_ANNULATUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHIPICEPHALUS_ANNULATUS;
