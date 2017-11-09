'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema


const threadSchema = new Schema({
  size: String,
  color: String,
  content: String,
  position: String,
  parent: {
    type: Schema.ObjectId,
    ref: 'parent'
  },
  children: [{ type: Schema.ObjectId, ref: 'child' }]
})

const Thread = mongoose.model('Thread', threadSchema)

// instance method
threadSchema.methods.findSimilarTypes = cb =>
  this.model('Thread').find({ type: this.type }, cb)

// static method
threadSchema.statics.findByName = (name, cb) =>
  this.find({ name: new RegExp(name, 'i') }, cb)

// virtual
personSchema.virtual('fullName').get(() =>
  `${this.name.first} ${this.name.last}`)

// something



module.exports = Thread
