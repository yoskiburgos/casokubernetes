const express = require('express');
const router = express.Router();

/* GET  */
router.get('/', function(req, res, next) {
  //res.set('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.json({mensaje: 'Hola'});
});



module.exports = router;
