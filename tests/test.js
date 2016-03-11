var request = require('supertest')
  , app = require(__dirname + '/../app')

describe('GET /', function () {
  it('should contain text "Home page"', function (done) {
     request(app)
       .get('/home/')
       .expect(/Home page/, done)
  })
})

describe('GET /about', function () {
  it('should contain text "About page"', function (done) {
     request(app)
       .get('/about/')
       .expect(/About page/, done)
  })
})