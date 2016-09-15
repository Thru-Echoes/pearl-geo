var express = require('express');
var routerRHIPICEPHALUS_DECOLORATUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHIPICEPHALUS_DECOLORATUS.get('/', function(req, res) {

    var renderObj = {
        title: "Rhipicephalus decoloratus",
        currMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_DECOLORATUS/RHIPICEPHALUS DECOLORATUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_DECOLORATUS/future-maps/future.pdf",
        url: "/RHIPICEPHALUS_DECOLORATUS",
        urlCSV: "pdf/web/species-pages/RHIPICEPHALUS_DECOLORATUS/RHIPICEPHALUS DECOLORATUS pearldata.csv"
    };
    res.render('RHIPICEPHALUS_DECOLORATUS', renderObj);
});

// Grab data from document
routerRHIPICEPHALUS_DECOLORATUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHIPICEPHALUS_DECOLORATUS;
