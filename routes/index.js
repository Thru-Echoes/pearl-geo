var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('index', {
        title: "PEARL Home"
    });
});

module.exports = router;
