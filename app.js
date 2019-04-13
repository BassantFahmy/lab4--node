require('./db');
var express = require('express');

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


const cerr=require('http-errors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());




app.use('/api/users',  usersRouter);

app.use('/api/msgs', indexRouter);



app.use(express.static(path.join(__dirname, 'public')));


app.use((req, res, next) => {
    next(cerr(404));
})


app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500);
    res.send(err);
})

module.exports = app;
