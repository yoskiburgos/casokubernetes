const express = require('express');
var createError = require('http-errors');
const cors = require('cors');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();
const corsOrigin = process.env.CORS_ORIGIN || '*';


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/usuarios', usersRouter);



// catch undefined routes and respond with 404
app.use(function(req, res, next) {
  res.status(404).send("La url no se encuentra!")
});

// catch server errors and respond with 500
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Algun enlace roto!')
})




module.exports = app;



