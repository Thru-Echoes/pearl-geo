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
var cibi = require('./routes/cibi');
var tave = require('./routes/tave');
var ixsc = require('./routes/ixsc');
var mdMap = require('./routes/md-map');
var about = require('./routes/about');
var team = require('./routes/team');

var app = express();
//var routes = require('./routes/index');

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

app.use('/', routes);
app.use('/sobbat', sobbat);
app.use('/foobar', foobar);
app.use('/cibi', cibi);
app.use('/tave', tave);
app.use('/ixsc', ixsc);
app.use('/md-map', mdMap);
app.use('/about', about);
app.use('/team', team);

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
