'use strict'

const router = require('express').Router()
const { Web } = require('../db/models')


// router.param
// get all where child is null
// get by id
// get child / parent (need id) (recursively get all of them)
// post by id
// put by id (add/remove parents/children)
// delete by id


router.get('/webs', (req, res, next) => {
  mongoose.model('web').find((err, web) => res.send(web))
})


module.exports = router
