var express = require('express');
var routerRHIPICEPHALUS_EVERTSI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHIPICEPHALUS_EVERTSI.get('/', function(req, res) {

    var renderObj = {
        title: "Rhipicephalus evertsi",
        currMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_EVERTSI/RHIPICEPHALUS EVERTSI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_EVERTSI/future-maps/future.pdf",
        url: "/RHIPICEPHALUS_EVERTSI",
        urlCSV: "pdf/web/species-pages/RHIPICEPHALUS_EVERTSI/RHIPICEPHALUS EVERTSI pearldata.csv"
    };
    res.render('RHIPICEPHALUS_EVERTSI', renderObj);
});

// Grab data from document
routerRHIPICEPHALUS_EVERTSI.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHIPICEPHALUS_EVERTSI;
