const {expect} = require('chai')
const supertest = require('supertest')
const app = require('../src/app')
const { bookmarks } = require('../src/store')

describe('App', ()=>{
    it('GET /api responds with 200 containing "hello world!"', ()=> {
        return supertest(app)
           .get('/api')
           .expect(200, 'hello world!')
    })
})


describe('App', ()=>{
    it('GET /api/bookmarks responds with 200 containing "hello world!"', ()=> {
        return supertest(app)
           .get('/api/bookmarks')
           .expect(200, bookmarks)
    })
})


describe('App', ()=>{
    it('GET /api/bookmarks/1 responds with 200 containing "hello world!"', ()=> {
        return supertest(app)
           .get('/api/bookmarks/1')
           .expect(200, bookmarks[0])
    })
})