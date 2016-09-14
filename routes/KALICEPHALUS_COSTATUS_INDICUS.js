var express = require('express');
var routerKALICEPHALUS_COSTATUS_INDICUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerKALICEPHALUS_COSTATUS_INDICUS.get('/', function(req, res) {

    var renderObj = {
        title: "Kalicephalus costatus indicus",
        currMap: "pdf/web/viewer.html?file=species-pages/KALICEPHALUS_COSTATUS_INDICUS/KALICEPHALUS COSTATUS INDICUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/KALICEPHALUS_COSTATUS_INDICUS/future-maps/future.pdf",
        url: "/KALICEPHALUS_COSTATUS_INDICUS",
        urlCSV: "pdf/web/species-pages/KALICEPHALUS_COSTATUS_INDICUS/KALICEPHALUS COSTATUS INDICUS pearldata.csv"
    };
    res.render('KALICEPHALUS_COSTATUS_INDICUS', renderObj);
});

// Grab data from document
routerKALICEPHALUS_COSTATUS_INDICUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerKALICEPHALUS_COSTATUS_INDICUS;
