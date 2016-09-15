var express = require('express');
var routerRHIPICEPHALUS_CAPENSIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHIPICEPHALUS_CAPENSIS.get('/', function(req, res) {

    var renderObj = {
        title: "Rhipicephalus capensis",
        currMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_CAPENSIS/RHIPICEPHALUS CAPENSIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_CAPENSIS/future-maps/future.pdf",
        url: "/RHIPICEPHALUS_CAPENSIS",
        urlCSV: "pdf/web/species-pages/RHIPICEPHALUS_CAPENSIS/RHIPICEPHALUS CAPENSIS pearldata.csv"
    };
    res.render('RHIPICEPHALUS_CAPENSIS', renderObj);
});

// Grab data from document
routerRHIPICEPHALUS_CAPENSIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHIPICEPHALUS_CAPENSIS;
