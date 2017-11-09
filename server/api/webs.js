'use strict'

const router = require('express').Router()



// route querying mongodb
router.get('/', (req, res, next) => {
  const MongoClient = mongodb.MongoClient
  const url = 'mongodb://localhost:27017/writer-web'

  MongoClient.connect(url, (err, db) => {
    if (err) console.log('Unable to connect to the server', err)
    else {
      console.log('Connection established')
      const collection = db.collection('web') // temp search

      collection.find({}).toArray((err, result) => { // collection.insert() for post request
        if (err) res.status(500).send(err)
        else if (result.length) res.send(result)
        else res.sendStatus(404)

        db.close()
      })
    }
  })
})


app.get('/webs', (req, res, next) => {
  mongoose.model('web').find((err, web) => res.send(web))
})


module.exports = router
