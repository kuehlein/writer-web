'use strict'

const router = require('express').Router()


app.get('/threads', (req, res, next) => {
  mongoose.model('Thread').find((err, thread) => res.send(thread))
})


module.exports = router
