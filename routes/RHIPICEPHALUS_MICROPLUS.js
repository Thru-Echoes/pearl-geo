var express = require('express');
var routerRHIPICEPHALUS_MICROPLUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHIPICEPHALUS_MICROPLUS.get('/', function(req, res) {

    var renderObj = {
        title: "Rhipicephalus microplus",
        currMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_MICROPLUS/RHIPICEPHALUS MICROPLUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_MICROPLUS/future-maps/future.pdf",
        url: "/RHIPICEPHALUS_MICROPLUS",
        urlCSV: "pdf/web/species-pages/RHIPICEPHALUS_MICROPLUS/RHIPICEPHALUS MICROPLUS pearldata.csv"
    };
    res.render('RHIPICEPHALUS_MICROPLUS', renderObj);
});

// Grab data from document
routerRHIPICEPHALUS_MICROPLUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHIPICEPHALUS_MICROPLUS;
