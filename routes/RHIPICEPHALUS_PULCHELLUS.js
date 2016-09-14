var express = require('express');
var routerRHIPICEPHALUS_PULCHELLUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHIPICEPHALUS_PULCHELLUS.get('/', function(req, res) {

    var renderObj = {
        title: "Rhipicephalus pulchellus",
        currMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_PULCHELLUS/RHIPICEPHALUS PULCHELLUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_PULCHELLUS/future-maps/future.pdf",
        url: "/RHIPICEPHALUS_PULCHELLUS",
        urlCSV: "pdf/web/species-pages/RHIPICEPHALUS_PULCHELLUS/RHIPICEPHALUS PULCHELLUS pearldata.csv"
    };
    res.render('RHIPICEPHALUS_PULCHELLUS', renderObj);
});

// Grab data from document
routerRHIPICEPHALUS_PULCHELLUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHIPICEPHALUS_PULCHELLUS;
