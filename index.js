require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
// var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api');

var app = express();

var corsOptions = {
  origin: [
    'http://localhost:4242',
    'http://localhost:3000',
    'https://richellyitalo.github.io',
    'https://richellyitalo.com.br',
    'https://csgo-information.vercel.app',
    'https://csgo-information-richellyitalo.vercel.app'
  ],
  // allowedHeaders: [
  //   'x-total'
  // ],
  exposedHeaders: [
    'x-total'
  ]
};
app.use(cors(corsOptions));

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log('Server is Running'));

// error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;
