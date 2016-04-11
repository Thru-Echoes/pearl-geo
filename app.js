var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');

var routes = require('./routes/index');
var sobbat = require('./routes/sobbat');
var foobar = require('./routes/foobar');

var app = express();
var routes = require('./routes/index');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing Nova favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Enhanced error checking (GLOBAL)
var isType = function(obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
};
module.exports = isType;

var nNode = "test";
var nClass = "test";
var isSex = "test";
var isYoung = "test";
var isOld = "test";
var isMM = "test";
var isDemo = "test";
var isEnvir = "test";

var mClassAll = "test";
var fClassAll = "test";
var bRatesAll = "test";
var msRatesAll = "test";
var fsRatesAll = "test";

var msStockAll = "test";
var fsStockAll = "test";
var msHarvestAll = "test";
var fsHarvestAll = "test";
var intervalsAll = "test";
var valuesAll = "test";

var ddsAll = "test";
var ccsAll = "test";
var connectance = "test";
var mBioAll = "test";
var fBioAll = "test";
var mPropAll = "test";
var fPropAll = "test";

/* From metapop page */
module.exports = nNode;
module.exports = nClass;
module.exports = isSex;
module.exports = isYoung;
module.exports = isOld;
module.exports = isMM;
module.exports = isDemo;
module.exports = isEnvir;

/* From population page */
module.exports = mClassAll;
module.exports = fClassAll;
module.exports = bRatesAll;
module.exports = msRatesAll;
module.exports = fsRatesAll;

/* From stocking page */
module.exports = msStockAll;
module.exports = fsStockAll;
module.exports = msHarvestAll;
module.exports = fsHarvestAll;
module.exports = intervalsAll;
module.exports = valuesAll;

/* From movement page */
module.exports = ddsAll;
module.exports = ccsAll;
module.exports = connectance;
module.exports = mBioAll;
module.exports = fBioAll;
module.exports = mPropAll;
module.exports = fPropAll;

app.use('/', routes);
app.use('/sobbat', sobbat);
app.use('/foobar', foobar);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
