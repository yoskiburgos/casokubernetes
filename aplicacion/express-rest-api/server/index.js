const app = require('./app');
const debug = require('debug')('Ejemplo:Servidor');

var fs = require('fs');
var https = require('https')

const port = parseInt(process.env.PORT || '443', 10);
app.set('port', port);

const PUERTO = 443;

https.createServer({
  cert:  fs.readFileSync('./server/ryans-cert.pem'),
  key:  fs.readFileSync('./server/ryans-key.pem')
}, app).listen(PUERTO, function(){
  console.log('Servidor HTTPS............')
})


/*
var tls = require('tls');
var fs = require('fs');

var options = {
  key: fs.readFileSync('server-key.pem'),
  cert: fs.readFileSync('server-cert.pem')
};

tls.createServer(options, function (s) {
  s.write("welcome!\n");
  s.pipe(s);
}).listen(8000);
*/

/*
app.listen(app.get('port'), function () {
  debug(`Puerto del Servidor = ${app.get('port')}`);
});
*/


