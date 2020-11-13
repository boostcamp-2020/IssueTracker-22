const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport');
require('dotenv').config();

const indexRouter = require('./routes/index');
const { sequelize } = require('./models');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
sequelize.sync();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
require('./lib/passport');

app.use('/', indexRouter);

app.use(errorHandler);

module.exports = app;
