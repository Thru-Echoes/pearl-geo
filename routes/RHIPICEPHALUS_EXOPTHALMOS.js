var express = require('express');
var routerRHIPICEPHALUS_EXOPTHALMOS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHIPICEPHALUS_EXOPTHALMOS.get('/', function(req, res) {

    var renderObj = {
        title: "Rhipicephalus exopthalmos",
        currMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_EXOPTHALMOS/RHIPICEPHALUS EXOPTHALMOS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_EXOPTHALMOS/future-maps/future.pdf",
        url: "/RHIPICEPHALUS_EXOPTHALMOS",
        urlCSV: "pdf/web/species-pages/RHIPICEPHALUS_EXOPTHALMOS/RHIPICEPHALUS EXOPTHALMOS pearldata.csv"
    };
    res.render('RHIPICEPHALUS_EXOPTHALMOS', renderObj);
});

// Grab data from document
routerRHIPICEPHALUS_EXOPTHALMOS.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHIPICEPHALUS_EXOPTHALMOS;
