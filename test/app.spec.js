const {expect} = require('chai')
const supertest = require('supertest')
const app = require('../src/app')

describe('App', ()=>{
    it('GET /api responds with 200 containing "hello world!"', ()=> {
        return supertest(app)
           .get('/api')
           .expect(200, 'hello world!')
    })
})
