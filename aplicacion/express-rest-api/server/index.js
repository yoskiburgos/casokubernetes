const app = require('./app');
const debug = require('debug')('Servidor');

const port = parseInt(process.env.PORT || '8080', 10);
app.set('port', port);

app.listen(app.get('port'), function () {
  debug(`Puerto del Servidor = ${app.get('port')}`);
});
