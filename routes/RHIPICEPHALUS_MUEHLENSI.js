var express = require('express');
var routerRHIPICEPHALUS_MUEHLENSI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHIPICEPHALUS_MUEHLENSI.get('/', function(req, res) {

    var renderObj = {
        title: "Rhipicephalus muehlensi",
        currMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_MUEHLENSI/RHIPICEPHALUS MUEHLENSI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_MUEHLENSI/future-maps/future.pdf",
        url: "/RHIPICEPHALUS_MUEHLENSI",
        urlCSV: "pdf/web/species-pages/RHIPICEPHALUS_MUEHLENSI/RHIPICEPHALUS MUEHLENSI pearldata.csv"
    };
    res.render('RHIPICEPHALUS_MUEHLENSI', renderObj);
});

// Grab data from document
routerRHIPICEPHALUS_MUEHLENSI.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHIPICEPHALUS_MUEHLENSI;
