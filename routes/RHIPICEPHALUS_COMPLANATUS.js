var express = require('express');
var routerRHIPICEPHALUS_COMPLANATUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHIPICEPHALUS_COMPLANATUS.get('/', function(req, res) {

    var renderObj = {
        title: "Rhipicephalus complanatus",
        currMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_COMPLANATUS/RHIPICEPHALUS COMPLANATUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_COMPLANATUS/future-maps/future.pdf",
        url: "/RHIPICEPHALUS_COMPLANATUS",
        urlCSV: "pdf/web/species-pages/RHIPICEPHALUS_COMPLANATUS/RHIPICEPHALUS COMPLANATUS pearldata.csv"
    };
    res.render('RHIPICEPHALUS_COMPLANATUS', renderObj);
});

// Grab data from document
routerRHIPICEPHALUS_COMPLANATUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHIPICEPHALUS_COMPLANATUS;
