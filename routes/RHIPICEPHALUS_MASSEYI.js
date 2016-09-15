var express = require('express');
var routerRHIPICEPHALUS_MASSEYI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHIPICEPHALUS_MASSEYI.get('/', function(req, res) {

    var renderObj = {
        title: "Rhipicephalus masseyi",
        currMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_MASSEYI/RHIPICEPHALUS MASSEYI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_MASSEYI/future-maps/future.pdf",
        url: "/RHIPICEPHALUS_MASSEYI",
        urlCSV: "pdf/web/species-pages/RHIPICEPHALUS_MASSEYI/RHIPICEPHALUS MASSEYI pearldata.csv"
    };
    res.render('RHIPICEPHALUS_MASSEYI', renderObj);
});

// Grab data from document
routerRHIPICEPHALUS_MASSEYI.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHIPICEPHALUS_MASSEYI;
