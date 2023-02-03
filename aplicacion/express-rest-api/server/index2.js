var express = require('express')
var cors = require('cors')
var app = express()

var allowlist = ['http://127.0.0.1', 'http://localhost:8080']
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}


const corsOptions2 = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

  const corsOptions3 = {
    origin: '*',
    methods: ["GET"],
    credentials: true,
    //preflightContinue: false,
    optionsSuccessStatus: 204
   // maxAge: 3600


  };

  //corsOptionsDelegate
// cors(),
app.get('/', function (req, res, next) {

  res.set({
     "Access-Control-Allow-Origin": "*"
 });
    
  res.json([{nombre: 'This is CORS-enabled for an allowed domain.', edad: 0}])
})


//app.use(cors());

/*

"Access-Control-Allow-Origin": "http://localhost:8080",
     "Access-Control-Allow-Methods": "GET",
     "Access-Control-Allow-Headers": "Content-Type, Authorization"


app.get('/',(req,res, next)=>{
    
    res.set({
       // "Access-Control-Allow-Origin": "http://localhost:8080",
        "Content-Type" : "application/json",
        'Access-Control-Allow-Headers': 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization',
        'Allow': 'GET, POST, OPTIONS, PUT, DELETE',
        'Access-Control-Max-Age': '86400'
    });

    next();

    res.json([{nombre: 'This is CORS-enabled for an allowed domain.', edad: 0}])
})
*/


app.listen(8080, function () {
  console.log('CORS-enabled web server listening on port 80')
})

//app.options('*', cors())

/*
app.use((req, res, next) => {
    res.set({
        "Access-Control-Allow-Origin": "*"
    });
  
    next();
  });
*/
