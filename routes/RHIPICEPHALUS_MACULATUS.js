var express = require('express');
var routerRHIPICEPHALUS_MACULATUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHIPICEPHALUS_MACULATUS.get('/', function(req, res) {

    var renderObj = {
        title: "Rhipicephalus maculatus",
        currMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_MACULATUS/RHIPICEPHALUS MACULATUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_MACULATUS/future-maps/future.pdf",
        url: "/RHIPICEPHALUS_MACULATUS",
        urlCSV: "pdf/web/species-pages/RHIPICEPHALUS_MACULATUS/RHIPICEPHALUS MACULATUS pearldata.csv"
    };
    res.render('RHIPICEPHALUS_MACULATUS', renderObj);
});

// Grab data from document
routerRHIPICEPHALUS_MACULATUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHIPICEPHALUS_MACULATUS;
