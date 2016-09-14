var express = require('express');
var routerRHIPICEPHALUS_PLANUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHIPICEPHALUS_PLANUS.get('/', function(req, res) {

    var renderObj = {
        title: "Rhipicephalus planus",
        currMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_PLANUS/RHIPICEPHALUS PLANUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_PLANUS/future-maps/future.pdf",
        url: "/RHIPICEPHALUS_PLANUS",
        urlCSV: "pdf/web/species-pages/RHIPICEPHALUS_PLANUS/RHIPICEPHALUS PLANUS pearldata.csv"
    };
    res.render('RHIPICEPHALUS_PLANUS', renderObj);
});

// Grab data from document
routerRHIPICEPHALUS_PLANUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHIPICEPHALUS_PLANUS;
