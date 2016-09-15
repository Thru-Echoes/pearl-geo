var express = require('express');
var routerRHIPICEPHALUS_DUX = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHIPICEPHALUS_DUX.get('/', function(req, res) {

    var renderObj = {
        title: "Rhipicephalus dux",
        currMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_DUX/RHIPICEPHALUS DUX current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_DUX/future-maps/future.pdf",
        url: "/RHIPICEPHALUS_DUX",
        urlCSV: "pdf/web/species-pages/RHIPICEPHALUS_DUX/RHIPICEPHALUS DUX pearldata.csv"
    };
    res.render('RHIPICEPHALUS_DUX', renderObj);
});

// Grab data from document
routerRHIPICEPHALUS_DUX.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHIPICEPHALUS_DUX;
