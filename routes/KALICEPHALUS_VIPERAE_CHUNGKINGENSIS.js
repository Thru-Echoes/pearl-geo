var express = require('express');
var routerKALICEPHALUS_VIPERAE_CHUNGKINGENSIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerKALICEPHALUS_VIPERAE_CHUNGKINGENSIS.get('/', function(req, res) {

    var renderObj = {
        title: "Kalicephalus viperae chungkingensis",
        currMap: "pdf/web/viewer.html?file=species-pages/KALICEPHALUS_VIPERAE_CHUNGKINGENSIS/KALICEPHALUS VIPERAE CHUNGKINGENSIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/KALICEPHALUS_VIPERAE_CHUNGKINGENSIS/future-maps/future.pdf",
        url: "/KALICEPHALUS_VIPERAE_CHUNGKINGENSIS",
        urlCSV: "pdf/web/species-pages/KALICEPHALUS_VIPERAE_CHUNGKINGENSIS/KALICEPHALUS VIPERAE CHUNGKINGENSIS pearldata.csv"
    };
    res.render('KALICEPHALUS_VIPERAE_CHUNGKINGENSIS', renderObj);
});

// Grab data from document
routerKALICEPHALUS_VIPERAE_CHUNGKINGENSIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerKALICEPHALUS_VIPERAE_CHUNGKINGENSIS;
