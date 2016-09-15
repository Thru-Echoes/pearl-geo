var express = require('express');
var routerRHIPICEPHALUS_SIMPSONI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHIPICEPHALUS_SIMPSONI.get('/', function(req, res) {

    var renderObj = {
        title: "Rhipicephalus simpsoni",
        currMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_SIMPSONI/RHIPICEPHALUS SIMPSONI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_SIMPSONI/future-maps/future.pdf",
        url: "/RHIPICEPHALUS_SIMPSONI",
        urlCSV: "pdf/web/species-pages/RHIPICEPHALUS_SIMPSONI/RHIPICEPHALUS SIMPSONI pearldata.csv"
    };
    res.render('RHIPICEPHALUS_SIMPSONI', renderObj);
});

// Grab data from document
routerRHIPICEPHALUS_SIMPSONI.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHIPICEPHALUS_SIMPSONI;
