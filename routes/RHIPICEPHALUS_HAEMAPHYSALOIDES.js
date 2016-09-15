var express = require('express');
var routerRHIPICEPHALUS_HAEMAPHYSALOIDES = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHIPICEPHALUS_HAEMAPHYSALOIDES.get('/', function(req, res) {

    var renderObj = {
        title: "Rhipicephalus haemaphysaloides",
        currMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_HAEMAPHYSALOIDES/RHIPICEPHALUS HAEMAPHYSALOIDES current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_HAEMAPHYSALOIDES/future-maps/future.pdf",
        url: "/RHIPICEPHALUS_HAEMAPHYSALOIDES",
        urlCSV: "pdf/web/species-pages/RHIPICEPHALUS_HAEMAPHYSALOIDES/RHIPICEPHALUS HAEMAPHYSALOIDES pearldata.csv"
    };
    res.render('RHIPICEPHALUS_HAEMAPHYSALOIDES', renderObj);
});

// Grab data from document
routerRHIPICEPHALUS_HAEMAPHYSALOIDES.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHIPICEPHALUS_HAEMAPHYSALOIDES;
