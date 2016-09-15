var express = require('express');
var routerRHIPICEPHALUS_PILANS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHIPICEPHALUS_PILANS.get('/', function(req, res) {

    var renderObj = {
        title: "Rhipicephalus pilans",
        currMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_PILANS/RHIPICEPHALUS PILANS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_PILANS/future-maps/future.pdf",
        url: "/RHIPICEPHALUS_PILANS",
        urlCSV: "pdf/web/species-pages/RHIPICEPHALUS_PILANS/RHIPICEPHALUS PILANS pearldata.csv"
    };
    res.render('RHIPICEPHALUS_PILANS', renderObj);
});

// Grab data from document
routerRHIPICEPHALUS_PILANS.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHIPICEPHALUS_PILANS;
