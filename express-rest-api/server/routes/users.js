const express = require('express');
const router = express.Router();


router.get('/obtener', function(req, res, next) {
  //res.set('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.json([
    { nombre:'Cesar', edad: 13 },
    { nombre:'Homero', edad: 18 }
  ])
});

module.exports = router;
