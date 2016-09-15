var express = require('express');
var routerDIPLOLAIMELLOIDES_OSCHEI = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerDIPLOLAIMELLOIDES_OSCHEI.get('/', function(req, res) {

    var renderObj = {
        title: "Diplolaimelloides oschei",
        currMap: "pdf/web/viewer.html?file=species-pages/DIPLOLAIMELLOIDES_OSCHEI/DIPLOLAIMELLOIDES OSCHEI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/DIPLOLAIMELLOIDES_OSCHEI/future-maps/future.pdf",
        url: "/DIPLOLAIMELLOIDES_OSCHEI",
        urlCSV: "pdf/web/species-pages/DIPLOLAIMELLOIDES_OSCHEI/DIPLOLAIMELLOIDES OSCHEI pearldata.csv"
    };
    res.render('DIPLOLAIMELLOIDES_OSCHEI', renderObj);
});

// Grab data from document
routerDIPLOLAIMELLOIDES_OSCHEI.post('/', function(req, res) {

    res.end();
});

module.exports = routerDIPLOLAIMELLOIDES_OSCHEI;
