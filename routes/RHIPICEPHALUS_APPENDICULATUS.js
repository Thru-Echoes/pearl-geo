var express = require('express');
var routerRHIPICEPHALUS_APPENDICULATUS = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerRHIPICEPHALUS_APPENDICULATUS.get('/', function(req, res) {

    var renderObj = {
        title: "Rhipicephalus appendiculatus",
        currMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_APPENDICULATUS/RHIPICEPHALUS APPENDICULATUS current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/RHIPICEPHALUS_APPENDICULATUS/future-maps/future.pdf",
        url: "/RHIPICEPHALUS_APPENDICULATUS",
        urlCSV: "pdf/web/species-pages/RHIPICEPHALUS_APPENDICULATUS/RHIPICEPHALUS APPENDICULATUS pearldata.csv"
    };
    res.render('RHIPICEPHALUS_APPENDICULATUS', renderObj);
});

// Grab data from document
routerRHIPICEPHALUS_APPENDICULATUS.post('/', function(req, res) {

    res.end();
});

module.exports = routerRHIPICEPHALUS_APPENDICULATUS;
