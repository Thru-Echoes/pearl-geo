var express = require('express');
var routerRHIPICEPHALUS_CUSPIDATUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHIPICEPHALUS_CUSPIDATUS.get('/', function(req, res) {

    var renderObj = {
        title: "Rhipicephalus cuspidatus",
        currMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_CUSPIDATUS/RHIPICEPHALUS CUSPIDATUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_CUSPIDATUS/future-maps/future.pdf",
        url: "/RHIPICEPHALUS_CUSPIDATUS",
        urlCSV: "pdf/web/species-pages/RHIPICEPHALUS_CUSPIDATUS/RHIPICEPHALUS CUSPIDATUS pearldata.csv"
    };
    res.render('RHIPICEPHALUS_CUSPIDATUS', renderObj);
});

// Grab data from document
routerRHIPICEPHALUS_CUSPIDATUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHIPICEPHALUS_CUSPIDATUS;
