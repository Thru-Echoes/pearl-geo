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
var AMBLYOMMA_ASTRION = require('./routes/AMBLYOMMA_ASTRION');
var AMBLYOMMA_CAJENNENSE = require('./routes/AMBLYOMMA_CAJENNENSE');
var AMBLYOMMA_COHAERENS = require('./routes/AMBLYOMMA_COHAERENS');
var AMBLYOMMA_COMPRESSUM = require('./routes/AMBLYOMMA_COMPRESSUM');
var AMBLYOMMA_CUNEATUM = require('./routes/AMBLYOMMA_CUNEATUM');
var AMBLYOMMA_EBERNEUM = require('./routes/AMBLYOMMA_EBERNEUM');
var AMBLYOMMA_EXORNATUM = require('./routes/AMBLYOMMA_EXORNATUM');
var AMBLYOMMA_FALSOMARMOREUM = require('./routes/AMBLYOMMA_FALSOMARMOREUM');
var AMBLYOMMA_FIMBRIATUM = require('./routes/AMBLYOMMA_FIMBRIATUM');
var AMBLYOMMA_FLAVOMACULATUM = require('./routes/AMBLYOMMA_FLAVOMACULATUM');
var AMBLYOMMA_GEMMA = require('./routes/AMBLYOMMA_GEMMA');
var AMBLYOMMA_GEOEMYDAE = require('./routes/AMBLYOMMA_GEOEMYDAE');
var AMBLYOMMA_HEBRAEUM = require('./routes/AMBLYOMMA_HEBRAEUM');
var AMBLYOMMA_HELVOLUM = require('./routes/AMBLYOMMA_HELVOLUM');
var AMBLYOMMA_JAVANENSE = require('./routes/AMBLYOMMA_JAVANENSE');
var AMBLYOMMA_LATUM = require('./routes/AMBLYOMMA_LATUM');
var AMBLYOMMA_LEPIDUM = require('./routes/AMBLYOMMA_LEPIDUM');
var AMBLYOMMA_LIMBATUM = require('./routes/AMBLYOMMA_LIMBATUM');
var AMBLYOMMA_MACULATUM = require('./routes/AMBLYOMMA_MACULATUM');
var AMBLYOMMA_MARMOREUM = require('./routes/AMBLYOMMA_MARMOREUM');
var AMBLYOMMA_NUTTALLI = require('./routes/AMBLYOMMA_NUTTALLI');
var AMBLYOMMA_PAULOPUNCTATUM = require('./routes/AMBLYOMMA_PAULOPUNCTATUM');
var AMBLYOMMA_POMPOSUM = require('./routes/AMBLYOMMA_POMPOSUM');
var AMBLYOMMA_RHINOCEROTIS = require('./routes/AMBLYOMMA_RHINOCEROTIS');
var AMBLYOMMA_SPARSUM = require('./routes/AMBLYOMMA_SPARSUM');
var AMBLYOMMA_SPLENDIDUM = require('./routes/AMBLYOMMA_SPLENDIDUM');
var AMBLYOMMA_TESTUDINARIUM = require('./routes/AMBLYOMMA_TESTUDINARIUM');
var AMBLYOMMA_THOLLONI = require('./routes/AMBLYOMMA_THOLLONI');
var AMBLYOMMA_TRIGUTTATUM = require('./routes/AMBLYOMMA_TRIGUTTATUM');
var AMBLYOMMA_VARIEGATUM = require('./routes/AMBLYOMMA_VARIEGATUM');

var HYALOMMA_DROMEDARII = require('./routes/HYALOMMA_DROMEDARII');
var HYALOMMA_IMPELTATUM = require('./routes/HYALOMMA_IMPELTATUM');
var HYALOMMA_IMPRESSUM = require('./routes/HYALOMMA_IMPRESSUM');
var HYALOMMA_RUFIPES = require('./routes/HYALOMMA_RUFIPES');
var HYALOMMA_TRUNCATUM = require('./routes/HYALOMMA_TRUNCATUM');
var HYALOMMA_TURANICUM = require('./routes/HYALOMMA_TURANICUM');

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
app.use('/AMBLYOMMA_ASTRION', AMBLYOMMA_ASTRION);
app.use('/AMBLYOMMA_CAJENNENSE', AMBLYOMMA_CAJENNENSE);
app.use('/AMBLYOMMA_COHAERENS', AMBLYOMMA_COHAERENS);
app.use('/AMBLYOMMA_COMPRESSUM', AMBLYOMMA_COMPRESSUM);
app.use('/AMBLYOMMA_CUNEATUM', AMBLYOMMA_CUNEATUM);
app.use('/AMBLYOMMA_EBERNEUM', AMBLYOMMA_EBERNEUM);
app.use('/AMBLYOMMA_EXORNATUM', AMBLYOMMA_EXORNATUM);
app.use('/AMBLYOMMA_FALSOMARMOREUM', AMBLYOMMA_FALSOMARMOREUM);
app.use('/AMBLYOMMA_FIMBRIATUM', AMBLYOMMA_FIMBRIATUM);
app.use('/AMBLYOMMA_FLAVOMACULATUM', AMBLYOMMA_FLAVOMACULATUM);
app.use('/AMBLYOMMA_GEMMA', AMBLYOMMA_GEMMA);
app.use('/AMBLYOMMA_GEOEMYDAE', AMBLYOMMA_GEOEMYDAE);
app.use('/AMBLYOMMA_HEBRAEUM', AMBLYOMMA_HEBRAEUM);
app.use('/AMBLYOMMA_HELVOLUM', AMBLYOMMA_HELVOLUM);
app.use('/AMBLYOMMA_JAVANENSE', AMBLYOMMA_JAVANENSE);
app.use('/AMBLYOMMA_LATUM', AMBLYOMMA_LATUM);
app.use('/AMBLYOMMA_LEPIDUM', AMBLYOMMA_LEPIDUM);
app.use('/AMBLYOMMA_LIMBATUM', AMBLYOMMA_LIMBATUM);
app.use('/AMBLYOMMA_MACULATUM', AMBLYOMMA_MACULATUM);
app.use('/AMBLYOMMA_MARMOREUM', AMBLYOMMA_MARMOREUM);
app.use('/AMBLYOMMA_NUTTALLI', AMBLYOMMA_NUTTALLI);
app.use('/AMBLYOMMA_PAULOPUNCTATUM', AMBLYOMMA_PAULOPUNCTATUM);
app.use('/AMBLYOMMA_POMPOSUM', AMBLYOMMA_POMPOSUM);
app.use('/AMBLYOMMA_RHINOCEROTIS', AMBLYOMMA_RHINOCEROTIS);
app.use('/AMBLYOMMA_SPARSUM', AMBLYOMMA_SPARSUM);
app.use('/AMBLYOMMA_SPLENDIDUM', AMBLYOMMA_SPLENDIDUM);
app.use('/AMBLYOMMA_TESTUDINARIUM', AMBLYOMMA_TESTUDINARIUM);
app.use('/AMBLYOMMA_THOLLONI', AMBLYOMMA_THOLLONI);
app.use('/AMBLYOMMA_TRIGUTTATUM', AMBLYOMMA_TRIGUTTATUM);
app.use('/AMBLYOMMA_VARIEGATUM', AMBLYOMMA_VARIEGATUM);

app.use('/HYALOMMA_DROMEDARII', HYALOMMA_DROMEDARII);
app.use('/HYALOMMA_IMPELTATUM', HYALOMMA_IMPELTATUM);
app.use('/HYALOMMA_IMPRESSUM', HYALOMMA_IMPRESSUM);
app.use('/HYALOMMA_RUFIPES', HYALOMMA_RUFIPES);
app.use('/HYALOMMA_TRUNCATUM', HYALOMMA_TRUNCATUM);
app.use('/HYALOMMA_TURANICUM', HYALOMMA_TURANICUM);

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
