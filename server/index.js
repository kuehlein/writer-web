'use strict'

const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 1111
const app = express()


const createApp = () => {

  // logging middleware
  app.use(morgan('dev'))

  // body parsing middleware
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  // route to api
  app.use('/api', require('./api'))

  // static file-serving middleware
  app
    .use(express.static(path.join(__dirname, '..', 'public')))
    .use((req, res, next) => {
      if (path.extname(req.path).length) {
        const err = new Error('Not found')
        err.status = 404
        next(err)
        return null
      } else {
        next()
        return null
      }
    })

  // sends index.html
  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
  })

  // error handling endware
  app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })
}

const startListening = () => {
  const server = app.listen(PORT, () =>
    console.log(`Going to town on port ${PORT}`)
  )
}

// connect to database
mongoose.connect('mongodb://27017/ww')

createApp()
startListening()


module.exports = app
