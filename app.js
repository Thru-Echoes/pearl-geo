var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');

var routes = require('./routes/index');

/* JS routes for middleware species pages (step 1) */
var ABBREVIATA_BANCROFTI = require('./routes/ABBREVIATA_BANCROFTI');
var ABBREVIATA_HASTASPICULA = require('./routes/ABBREVIATA_HASTASPICULA');
var AGLENCHUS_AGRICOLA = require('./routes/AGLENCHUS_AGRICOLA');
var ALAIMUS_PRIMITIVUS = require('./routes/ALAIMUS_PRIMITIVUS');
var ALLOCORRIGIA_FILIFORMIS = require('./routes/ALLOCORRIGIA_FILIFORMIS');
var ALLOGLOSSIDIUM_CORTI = require('./routes/ALLOGLOSSIDIUM_CORTI');
var AMALARAEUS_PENICILLIGER = require('./routes/AMALARAEUS_PENICILLIGER');
var AMBLYOMMA_AMERICANUM = require('./routes/AMBLYOMMA_AMERICANUM');

var AMBLYOMMA_CAJENNENSE = require('./routes/AMBLYOMMA_CAJENNENSE');

var hydr = require('./routes/hydr');
var hyimpe = require('./routes/hyimpe');
var hyimpr = require('./routes/hyimpr');


// Add species above here and then scroll down
// to add page reference (step 1 of 2)
/*******************************************/

var about = require('./routes/about');
var team = require('./routes/team');
var atlas = require('./routes/atlas');

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

/* Tell middleware to send out species pages...*/
app.use('/ABBREVIATA_BANCROFTI', ABBREVIATA_BANCROFTI);
app.use('/ABBREVIATA_HASTASPICULA', ABBREVIATA_HASTASPICULA);
app.use('/AGLENCHUS_AGRICOLA', AGLENCHUS_AGRICOLA);
app.use('/ALAIMUS_PRIMITIVUS', ALAIMUS_PRIMITIVUS);
app.use('/ALLOCORRIGIA_FILIFORMIS', ALLOCORRIGIA_FILIFORMIS);
app.use('/ALLOGLOSSIDIUM_CORTI', ALLOGLOSSIDIUM_CORTI);
app.use('/AMALARAEUS_PENICILLIGER', AMALARAEUS_PENICILLIGER);
app.use('/AMBLYOMMA_AMERICANUM', AMBLYOMMA_AMERICANUM);

app.use('/AMBLYOMMA_CAJENNENSE', AMBLYOMMA_CAJENNENSE);

app.use('/hydr', hydr);
app.use('/hyimpe', hyimpe);
app.use('/hyimpr', hyimpr);

// Add page reference here (step 2)
/*******************************************/

app.use('/about', about);
app.use('/team', team);
app.use('/atlas', atlas);

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
