var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');

var routes = require('./routes/index');

/* JS routes for middleware species pages */
var abba = require('./routes/abba');
var abha = require('./routes/abha');
var agag = require('./routes/agag');
var alpr = require('./routes/alpr');
var alfi = require('./routes/alfi');
var alco = require('./routes/alco');
var ampe = require('./routes/ampe');
var amam = require('./routes/amam');
var amas = require('./routes/amas');
var amca = require('./routes/amca');
var amcoh = require('./routes/amcoh');
var amcom = require('./routes/amcom');
var amcu = require('./routes/amcu');
var ameb = require('./routes/ameb');
var amex = require('./routes/amex');
var amfa = require('./routes/amfa');
var amfi = require('./routes/amfi');
var amfl = require('./routes/amfl');
var amgem = require('./routes/amgem');
var amgeo = require('./routes/amgeo');
var amheb = require('./routes/amheb');
var amhel = require('./routes/amhel');
var amja = require('./routes/amja');
var amla = require('./routes/amla');
var amle = require('./routes/amle');
var amli = require('./routes/amli');
var ammac = require('./routes/ammac');
var ammar = require('./routes/ammar');
var amnu = require('./routes/amnu');
var ampa = require('./routes/ampa');
var ampo = require('./routes/ampo');
var amrh = require('./routes/amrh');
var amspa = require('./routes/amspa');
var amspl = require('./routes/amspl');
var amte = require('./routes/amte');
var amth = require('./routes/amth');
var amtr = require('./routes/amtr');
var amva = require('./routes/amva');
var angr = require('./routes/angr');




// Add species above here and then scroll down
// to add page reference
/*******************************************/


var cibi = require('./routes/cibi');
var tave = require('./routes/tave');
var ixsc = require('./routes/ixsc');
var abco = require('./routes/abco');

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

/* Tell middleware to send out species pages...*/
app.use('/abba', abba);
app.use('/abha', abha);
app.use('/agag', agag);
app.use('/alpr', alpr);
app.use('/alfi', alfi);
app.use('/alco', alco);
app.use('/ampe', ampe);
app.use('/amam', amam);
app.use('/amas', amas);
app.use('/amca', amca);
app.use('/amcoh', amcoh);
app.use('/amcom', amcom);
app.use('/amcu', amcu);
app.use('/ameb', ameb);
app.use('/amex', amex);
app.use('/amfa', amfa);
app.use('/amfi', amfi);
app.use('/amfl', amfl);
app.use('/amgem', amgem);
app.use('/amgeo', amgeo);
app.use('/amheb', amheb);
app.use('/amhel', amhel);
app.use('/amja', amja);
app.use('/amla', amla);
app.use('/amle', amle);
app.use('/amli', amli);
app.use('/ammac', ammac);
app.use('/ammar', ammar);
app.use('/amnu', amnu);
app.use('/ampa', ampa);
app.use('/ampo', ampo);
app.use('/amrh', amrh);
app.use('/amspa', amspa);
app.use('/amspl', amspl);
app.use('/amte', amte);
app.use('/amth', amth);
app.use('/amtr', amtr);
app.use('/amva', amva);
app.use('/angr', angr);



// Add page reference here (step 2)
/*******************************************/

app.use('/cibi', cibi);
app.use('/tave', tave);
app.use('/ixsc', ixsc);
app.use('/abco', abco);

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
