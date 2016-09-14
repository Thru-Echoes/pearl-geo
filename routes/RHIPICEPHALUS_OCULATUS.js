var express = require('express');
var routerRHIPICEPHALUS_OCULATUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHIPICEPHALUS_OCULATUS.get('/', function(req, res) {

    var renderObj = {
        title: "Rhipicephalus oculatus",
        currMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_OCULATUS/RHIPICEPHALUS OCULATUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_OCULATUS/future-maps/future.pdf",
        url: "/RHIPICEPHALUS_OCULATUS",
        urlCSV: "pdf/web/species-pages/RHIPICEPHALUS_OCULATUS/RHIPICEPHALUS OCULATUS pearldata.csv"
    };
    res.render('RHIPICEPHALUS_OCULATUS', renderObj);
});

// Grab data from document
routerRHIPICEPHALUS_OCULATUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHIPICEPHALUS_OCULATUS;
