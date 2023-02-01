const request = require('supertest');
const app = require('../server/app.js');

describe('GET /usuarios', function() {
  it('return list of users', function() {
    return request(app)
      .get('/usuarios')
      .expect(200)
      .expect('Content-Type',/json/)
      .expect('[{"nombre":"Cesar","edad":13},{"nombre":"Homero","edad":15}]')
  })
})