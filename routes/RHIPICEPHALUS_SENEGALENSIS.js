var express = require('express');
var routerRHIPICEPHALUS_SENEGALENSIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHIPICEPHALUS_SENEGALENSIS.get('/', function(req, res) {

    var renderObj = {
        title: "Rhipicephalus senegalensis",
        currMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_SENEGALENSIS/RHIPICEPHALUS SENEGALENSIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_SENEGALENSIS/future-maps/future.pdf",
        url: "/RHIPICEPHALUS_SENEGALENSIS",
        urlCSV: "pdf/web/species-pages/RHIPICEPHALUS_SENEGALENSIS/RHIPICEPHALUS SENEGALENSIS pearldata.csv"
    };
    res.render('RHIPICEPHALUS_SENEGALENSIS', renderObj);
});

// Grab data from document
routerRHIPICEPHALUS_SENEGALENSIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHIPICEPHALUS_SENEGALENSIS;
