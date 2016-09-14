var express = require('express');
var routerRHIPICEPHALUS_SULCATUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHIPICEPHALUS_SULCATUS.get('/', function(req, res) {

    var renderObj = {
        title: "Rhipicephalus sulcatus",
        currMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_SULCATUS/RHIPICEPHALUS SULCATUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_SULCATUS/future-maps/future.pdf",
        url: "/RHIPICEPHALUS_SULCATUS",
        urlCSV: "pdf/web/species-pages/RHIPICEPHALUS_SULCATUS/RHIPICEPHALUS SULCATUS pearldata.csv"
    };
    res.render('RHIPICEPHALUS_SULCATUS', renderObj);
});

// Grab data from document
routerRHIPICEPHALUS_SULCATUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHIPICEPHALUS_SULCATUS;
