var express = require('express');
var routerRHIPICEPHALUS_KOCHI_GROUP = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHIPICEPHALUS_KOCHI_GROUP.get('/', function(req, res) {

    var renderObj = {
        title: "Rhipicephalus kochi group",
        currMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_KOCHI_GROUP/RHIPICEPHALUS KOCHI GROUP current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_KOCHI_GROUP/future-maps/future.pdf",
        url: "/RHIPICEPHALUS_KOCHI_GROUP",
        urlCSV: "pdf/web/species-pages/RHIPICEPHALUS_KOCHI_GROUP/RHIPICEPHALUS KOCHI GROUP pearldata.csv"
    };
    res.render('RHIPICEPHALUS_KOCHI_GROUP', renderObj);
});

// Grab data from document
routerRHIPICEPHALUS_KOCHI_GROUP.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHIPICEPHALUS_KOCHI_GROUP;
