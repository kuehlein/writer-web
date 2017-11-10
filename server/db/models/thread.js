'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema


const threadSchema = new Schema({
  coordinates: {                      // validate (required)
    point1: { x: Number, y: Number },
    point2: { x: Number, y: Number },
    point3: { x: Number, y: Number },
    point4: { x: Number, y: Number }
  },
  color: String,                      // default ('#000')
  content: String,
  connections: [Schema.ObjectId]
}, {
  minimize: false,
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

threadSchema.set('toObject', { getters: true })


const Thread = mongoose.model('Thread', threadSchema)


// instance method
threadSchema.methods.findSimilarTypes = cb =>
  this.model('Thread').find({ type: this.type }, cb)

// static method
threadSchema.statics.findByName = (name, cb) =>
  this.find({ name: new RegExp(name, 'i') }, cb)


module.exports = Thread
