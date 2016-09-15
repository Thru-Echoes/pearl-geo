var express = require('express');
var routerRHIPICEPHALUS_ZIEMANNI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHIPICEPHALUS_ZIEMANNI.get('/', function(req, res) {

    var renderObj = {
        title: "Rhipicephalus ziemanni",
        currMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_ZIEMANNI/RHIPICEPHALUS ZIEMANNI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_ZIEMANNI/future-maps/future.pdf",
        url: "/RHIPICEPHALUS_ZIEMANNI",
        urlCSV: "pdf/web/species-pages/RHIPICEPHALUS_ZIEMANNI/RHIPICEPHALUS ZIEMANNI pearldata.csv"
    };
    res.render('RHIPICEPHALUS_ZIEMANNI', renderObj);
});

// Grab data from document
routerRHIPICEPHALUS_ZIEMANNI.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHIPICEPHALUS_ZIEMANNI;
