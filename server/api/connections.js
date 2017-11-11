'use strict'

const router = require('express').Router()
const { Thread, Connection } = require('../db/models')


router.get('/', (req, res, next) => {
  mongoose.model('Connection'). find((err, connections) => res.send(connections))
})

router.get('/:id', (req, res, next) => {
  mongoose.model('Connection'). find((err, connection) => res.send(connection))
})


module.exports = router
