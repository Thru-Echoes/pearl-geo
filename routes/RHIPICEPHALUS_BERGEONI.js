var express = require('express');
var routerRHIPICEPHALUS_BERGEONI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHIPICEPHALUS_BERGEONI.get('/', function(req, res) {

    var renderObj = {
        title: "Rhipicephalus bergeoni",
        currMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_BERGEONI/RHIPICEPHALUS BERGEONI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_BERGEONI/future-maps/future.pdf",
        url: "/RHIPICEPHALUS_BERGEONI",
        urlCSV: "pdf/web/species-pages/RHIPICEPHALUS_BERGEONI/RHIPICEPHALUS BERGEONI pearldata.csv"
    };
    res.render('RHIPICEPHALUS_BERGEONI', renderObj);
});

// Grab data from document
routerRHIPICEPHALUS_BERGEONI.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHIPICEPHALUS_BERGEONI;
