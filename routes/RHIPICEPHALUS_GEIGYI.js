var express = require('express');
var routerRHIPICEPHALUS_GEIGYI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHIPICEPHALUS_GEIGYI.get('/', function(req, res) {

    var renderObj = {
        title: "Rhipicephalus geigyi",
        currMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_GEIGYI/RHIPICEPHALUS GEIGYI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_GEIGYI/future-maps/future.pdf",
        url: "/RHIPICEPHALUS_GEIGYI",
        urlCSV: "pdf/web/species-pages/RHIPICEPHALUS_GEIGYI/RHIPICEPHALUS GEIGYI pearldata.csv"
    };
    res.render('RHIPICEPHALUS_GEIGYI', renderObj);
});

// Grab data from document
routerRHIPICEPHALUS_GEIGYI.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHIPICEPHALUS_GEIGYI;
