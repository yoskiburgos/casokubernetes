const express = require('express');
var createError = require('http-errors');
//var path = require('path');
//var cookieParser = require('cookie-parser');
//var logger = require('morgan');
const cors = require('cors');

//const config = require('./config');



const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

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

/*
app.use(cors({
  origin: true, // "true" will copy the domain of the request back
                // to the reply. If you need more control than this
                // use a function.

  credentials: true, // This MUST be "true" if your endpoint is
                     // authenticated via either a session cookie
                     // or Authorization header. Otherwise the
                     // browser will block the response.

  methods: 'POST,GET,PUT,OPTIONS,DELETE' // Make sure you're not blocking
                                         // pre-flight OPTIONS requests
}));
*/



/*
var originsWhitelist = [
  'http://localhost:4200'
];
var corsOptions = {
  origin: function(origin, callback){
        var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
  },
  credentials:true
}
//here is the magic
app.use(cors(corsOptions));
*/

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET, POST","PUT");
  next();

});

module.exports = app;



