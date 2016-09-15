var express = require('express');
var routerRHIPICEPHALUS_PUNCTATUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHIPICEPHALUS_PUNCTATUS.get('/', function(req, res) {

    var renderObj = {
        title: "Rhipicephalus punctatus",
        currMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_PUNCTATUS/RHIPICEPHALUS PUNCTATUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_PUNCTATUS/future-maps/future.pdf",
        url: "/RHIPICEPHALUS_PUNCTATUS",
        urlCSV: "pdf/web/species-pages/RHIPICEPHALUS_PUNCTATUS/RHIPICEPHALUS PUNCTATUS pearldata.csv"
    };
    res.render('RHIPICEPHALUS_PUNCTATUS', renderObj);
});

// Grab data from document
routerRHIPICEPHALUS_PUNCTATUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHIPICEPHALUS_PUNCTATUS;
