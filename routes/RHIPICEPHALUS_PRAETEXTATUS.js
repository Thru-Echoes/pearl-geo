var express = require('express');
var routerRHIPICEPHALUS_PRAETEXTATUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHIPICEPHALUS_PRAETEXTATUS.get('/', function(req, res) {

    var renderObj = {
        title: "Rhipicephalus praetextatus",
        currMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_PRAETEXTATUS/RHIPICEPHALUS PRAETEXTATUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_PRAETEXTATUS/future-maps/future.pdf",
        url: "/RHIPICEPHALUS_PRAETEXTATUS",
        urlCSV: "pdf/web/species-pages/RHIPICEPHALUS_PRAETEXTATUS/RHIPICEPHALUS PRAETEXTATUS pearldata.csv"
    };
    res.render('RHIPICEPHALUS_PRAETEXTATUS', renderObj);
});

// Grab data from document
routerRHIPICEPHALUS_PRAETEXTATUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHIPICEPHALUS_PRAETEXTATUS;
