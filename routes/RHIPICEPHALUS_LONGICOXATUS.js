var express = require('express');
var routerRHIPICEPHALUS_LONGICOXATUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHIPICEPHALUS_LONGICOXATUS.get('/', function(req, res) {

    var renderObj = {
        title: "Rhipicephalus longicoxatus",
        currMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_LONGICOXATUS/RHIPICEPHALUS LONGICOXATUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_LONGICOXATUS/future-maps/future.pdf",
        url: "/RHIPICEPHALUS_LONGICOXATUS",
        urlCSV: "pdf/web/species-pages/RHIPICEPHALUS_LONGICOXATUS/RHIPICEPHALUS LONGICOXATUS pearldata.csv"
    };
    res.render('RHIPICEPHALUS_LONGICOXATUS', renderObj);
});

// Grab data from document
routerRHIPICEPHALUS_LONGICOXATUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHIPICEPHALUS_LONGICOXATUS;
