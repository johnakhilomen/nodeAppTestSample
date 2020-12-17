const express = require('express')
const logger = require('../logger')

const indexRouter = express.Router()
const bodyParser = express.json();

indexRouter
  .route('/')
  .get((req, res) => {
    res.send("hello world!")
  })
  

module.exports = indexRouter