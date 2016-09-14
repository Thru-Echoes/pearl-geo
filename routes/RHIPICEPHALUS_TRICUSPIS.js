var express = require('express');
var routerRHIPICEPHALUS_TRICUSPIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHIPICEPHALUS_TRICUSPIS.get('/', function(req, res) {

    var renderObj = {
        title: "Rhipicephalus tricuspis",
        currMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_TRICUSPIS/RHIPICEPHALUS TRICUSPIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_TRICUSPIS/future-maps/future.pdf",
        url: "/RHIPICEPHALUS_TRICUSPIS",
        urlCSV: "pdf/web/species-pages/RHIPICEPHALUS_TRICUSPIS/RHIPICEPHALUS TRICUSPIS pearldata.csv"
    };
    res.render('RHIPICEPHALUS_TRICUSPIS', renderObj);
});

// Grab data from document
routerRHIPICEPHALUS_TRICUSPIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHIPICEPHALUS_TRICUSPIS;
