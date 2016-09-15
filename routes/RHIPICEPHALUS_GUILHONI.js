var express = require('express');
var routerRHIPICEPHALUS_GUILHONI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHIPICEPHALUS_GUILHONI.get('/', function(req, res) {

    var renderObj = {
        title: "Rhipicephalus guilhoni",
        currMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_GUILHONI/RHIPICEPHALUS GUILHONI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_GUILHONI/future-maps/future.pdf",
        url: "/RHIPICEPHALUS_GUILHONI",
        urlCSV: "pdf/web/species-pages/RHIPICEPHALUS_GUILHONI/RHIPICEPHALUS GUILHONI pearldata.csv"
    };
    res.render('RHIPICEPHALUS_GUILHONI', renderObj);
});

// Grab data from document
routerRHIPICEPHALUS_GUILHONI.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHIPICEPHALUS_GUILHONI;
