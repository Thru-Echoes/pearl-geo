var express = require('express');
var routerRHIPICEPHALUS_HUMERALIS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHIPICEPHALUS_HUMERALIS.get('/', function(req, res) {

    var renderObj = {
        title: "Rhipicephalus humeralis",
        currMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_HUMERALIS/RHIPICEPHALUS HUMERALIS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_HUMERALIS/future-maps/future.pdf",
        url: "/RHIPICEPHALUS_HUMERALIS",
        urlCSV: "pdf/web/species-pages/RHIPICEPHALUS_HUMERALIS/RHIPICEPHALUS HUMERALIS pearldata.csv"
    };
    res.render('RHIPICEPHALUS_HUMERALIS', renderObj);
});

// Grab data from document
routerRHIPICEPHALUS_HUMERALIS.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHIPICEPHALUS_HUMERALIS;
