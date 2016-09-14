var express = require('express');
var routerRHIPICEPHALUS_ZAMBEZIENSIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHIPICEPHALUS_ZAMBEZIENSIS.get('/', function(req, res) {

    var renderObj = {
        title: "Rhipicephalus zambeziensis",
        currMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_ZAMBEZIENSIS/RHIPICEPHALUS ZAMBEZIENSIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_ZAMBEZIENSIS/future-maps/future.pdf",
        url: "/RHIPICEPHALUS_ZAMBEZIENSIS",
        urlCSV: "pdf/web/species-pages/RHIPICEPHALUS_ZAMBEZIENSIS/RHIPICEPHALUS ZAMBEZIENSIS pearldata.csv"
    };
    res.render('RHIPICEPHALUS_ZAMBEZIENSIS', renderObj);
});

// Grab data from document
routerRHIPICEPHALUS_ZAMBEZIENSIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHIPICEPHALUS_ZAMBEZIENSIS;
