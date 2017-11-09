const router = require('express').Router()


router.use('/projects', require('./projects'))
router.use('/webs', require('./webs'))
router.use('/threads', require('./threads'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})


module.exports = router
