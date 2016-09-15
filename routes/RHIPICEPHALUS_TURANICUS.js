var express = require('express');
var routerRHIPICEPHALUS_TURANICUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHIPICEPHALUS_TURANICUS.get('/', function(req, res) {

    var renderObj = {
        title: "Rhipicephalus turanicus",
        currMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_TURANICUS/RHIPICEPHALUS TURANICUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_TURANICUS/future-maps/future.pdf",
        url: "/RHIPICEPHALUS_TURANICUS",
        urlCSV: "pdf/web/species-pages/RHIPICEPHALUS_TURANICUS/RHIPICEPHALUS TURANICUS pearldata.csv"
    };
    res.render('RHIPICEPHALUS_TURANICUS', renderObj);
});

// Grab data from document
routerRHIPICEPHALUS_TURANICUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHIPICEPHALUS_TURANICUS;
