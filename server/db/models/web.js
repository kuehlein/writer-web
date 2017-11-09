'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema


const webSchema = new Schema({
  children: [{ type: Schema.ObjectId, ref: 'child' }]
})

const Web = mongoose.model('Web', webSchema)

// query helper
webSchema.query.byName = web =>
  this.find({ web: new RegExp(web, 'i') })


module.exports = Web
