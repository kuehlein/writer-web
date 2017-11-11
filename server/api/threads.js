'use strict'

const router = require('express').Router()
const { Thread, Connection } = require('../db/models')


router.use('/connections', require('./connections'))


router.get('/', (req, res, next) => {
  mongoose.model('Thread').find((err, thread) => res.send(thread))
})


// get all
// get one


module.exports = router
