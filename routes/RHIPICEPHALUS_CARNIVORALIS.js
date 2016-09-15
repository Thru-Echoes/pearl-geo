var express = require('express');
var routerRHIPICEPHALUS_CARNIVORALIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHIPICEPHALUS_CARNIVORALIS.get('/', function(req, res) {

    var renderObj = {
        title: "Rhipicephalus carnivoralis",
        currMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_CARNIVORALIS/RHIPICEPHALUS CARNIVORALIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_CARNIVORALIS/future-maps/future.pdf",
        url: "/RHIPICEPHALUS_CARNIVORALIS",
        urlCSV: "pdf/web/species-pages/RHIPICEPHALUS_CARNIVORALIS/RHIPICEPHALUS CARNIVORALIS pearldata.csv"
    };
    res.render('RHIPICEPHALUS_CARNIVORALIS', renderObj);
});

// Grab data from document
routerRHIPICEPHALUS_CARNIVORALIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHIPICEPHALUS_CARNIVORALIS;
