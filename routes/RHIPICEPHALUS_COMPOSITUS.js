var express = require('express');
var routerRHIPICEPHALUS_COMPOSITUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHIPICEPHALUS_COMPOSITUS.get('/', function(req, res) {

    var renderObj = {
        title: "Rhipicephalus compositus",
        currMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_COMPOSITUS/RHIPICEPHALUS COMPOSITUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_COMPOSITUS/future-maps/future.pdf",
        url: "/RHIPICEPHALUS_COMPOSITUS",
        urlCSV: "pdf/web/species-pages/RHIPICEPHALUS_COMPOSITUS/RHIPICEPHALUS COMPOSITUS pearldata.csv"
    };
    res.render('RHIPICEPHALUS_COMPOSITUS', renderObj);
});

// Grab data from document
routerRHIPICEPHALUS_COMPOSITUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHIPICEPHALUS_COMPOSITUS;
