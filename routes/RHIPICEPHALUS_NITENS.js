var express = require('express');
var routerRHIPICEPHALUS_NITENS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHIPICEPHALUS_NITENS.get('/', function(req, res) {

    var renderObj = {
        title: "Rhipicephalus nitens",
        currMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_NITENS/RHIPICEPHALUS NITENS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_NITENS/future-maps/future.pdf",
        url: "/RHIPICEPHALUS_NITENS",
        urlCSV: "pdf/web/species-pages/RHIPICEPHALUS_NITENS/RHIPICEPHALUS NITENS pearldata.csv"
    };
    res.render('RHIPICEPHALUS_NITENS', renderObj);
});

// Grab data from document
routerRHIPICEPHALUS_NITENS.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHIPICEPHALUS_NITENS;
