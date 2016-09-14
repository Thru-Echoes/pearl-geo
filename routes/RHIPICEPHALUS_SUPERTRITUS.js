var express = require('express');
var routerRHIPICEPHALUS_SUPERTRITUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHIPICEPHALUS_SUPERTRITUS.get('/', function(req, res) {

    var renderObj = {
        title: "Rhipicephalus supertritus",
        currMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_SUPERTRITUS/RHIPICEPHALUS SUPERTRITUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_SUPERTRITUS/future-maps/future.pdf",
        url: "/RHIPICEPHALUS_SUPERTRITUS",
        urlCSV: "pdf/web/species-pages/RHIPICEPHALUS_SUPERTRITUS/RHIPICEPHALUS SUPERTRITUS pearldata.csv"
    };
    res.render('RHIPICEPHALUS_SUPERTRITUS', renderObj);
});

// Grab data from document
routerRHIPICEPHALUS_SUPERTRITUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHIPICEPHALUS_SUPERTRITUS;
