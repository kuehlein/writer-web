'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema


const threadSchema = new Schema({
  name: String,
  coordinates: {
    point1: { x: Number, y: Number },
    point2: { x: Number, y: Number },
    point3: { x: Number, y: Number },
    point4: { x: Number, y: Number },
    required: true
  },
  color: { type: String, default: '#e0d9ce' },
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


// find data for relative, store as a virtual
threadSchema.methods.findRelative = (id, relationship) =>
  Thread.findById(id, `${relationship}Data`, (err, doc) => {
    if (err) console.log('There was an error retreving the data', err)
    else return threadSchema.virtual(`${relationship}`).get(() => doc)
  })

// find data for all connections (parent OR child)
threadSchema.methods.findAllRelatives = (relationship) =>
  Thread.findAll((err, doc) => {
    if (err) console.log('There was an error retreving the data', err)
    else return this.connections.map(id => this.findRelative(id, relationship))
  })


module.exports = Thread
