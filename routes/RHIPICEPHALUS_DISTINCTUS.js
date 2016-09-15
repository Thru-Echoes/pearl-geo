var express = require('express');
var routerRHIPICEPHALUS_DISTINCTUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHIPICEPHALUS_DISTINCTUS.get('/', function(req, res) {

    var renderObj = {
        title: "Rhipicephalus distinctus",
        currMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_DISTINCTUS/RHIPICEPHALUS DISTINCTUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_DISTINCTUS/future-maps/future.pdf",
        url: "/RHIPICEPHALUS_DISTINCTUS",
        urlCSV: "pdf/web/species-pages/RHIPICEPHALUS_DISTINCTUS/RHIPICEPHALUS DISTINCTUS pearldata.csv"
    };
    res.render('RHIPICEPHALUS_DISTINCTUS', renderObj);
});

// Grab data from document
routerRHIPICEPHALUS_DISTINCTUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHIPICEPHALUS_DISTINCTUS;
