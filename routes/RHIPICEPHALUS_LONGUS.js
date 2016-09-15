var express = require('express');
var routerRHIPICEPHALUS_LONGUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHIPICEPHALUS_LONGUS.get('/', function(req, res) {

    var renderObj = {
        title: "Rhipicephalus longus",
        currMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_LONGUS/RHIPICEPHALUS LONGUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_LONGUS/future-maps/future.pdf",
        url: "/RHIPICEPHALUS_LONGUS",
        urlCSV: "pdf/web/species-pages/RHIPICEPHALUS_LONGUS/RHIPICEPHALUS LONGUS pearldata.csv"
    };
    res.render('RHIPICEPHALUS_LONGUS', renderObj);
});

// Grab data from document
routerRHIPICEPHALUS_LONGUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHIPICEPHALUS_LONGUS;
