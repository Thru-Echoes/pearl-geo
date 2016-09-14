var express = require('express');
var routerRHIPICEPHALUS_MUHSAMAE = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHIPICEPHALUS_MUHSAMAE.get('/', function(req, res) {

    var renderObj = {
        title: "Rhipicephalus muhsamae",
        currMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_MUHSAMAE/RHIPICEPHALUS MUHSAMAE current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_MUHSAMAE/future-maps/future.pdf",
        url: "/RHIPICEPHALUS_MUHSAMAE",
        urlCSV: "pdf/web/species-pages/RHIPICEPHALUS_MUHSAMAE/RHIPICEPHALUS MUHSAMAE pearldata.csv"
    };
    res.render('RHIPICEPHALUS_MUHSAMAE', renderObj);
});

// Grab data from document
routerRHIPICEPHALUS_MUHSAMAE.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHIPICEPHALUS_MUHSAMAE;
