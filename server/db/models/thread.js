'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema


const threadSchema = new Schema({
  name: String,
  coordinates: {
    point1: {
      x: { type: Number, required: true },
      y: { type: Number, required: true }
    },
    point2: {
      x: { type: Number, required: true },
      y: { type: Number, required: true }
    },
    point3: {
      x: { type: Number, required: true },
      y: { type: Number, required: true }
    },
    point4: {
      x: { type: Number, required: true },
      y: { type: Number, required: true }
    }
  },
  color: { type: String, default: '#e0d9ce' }, // make it enum
  content: String,
  connections: [{ type: Schema.ObjectId, ref: 'connection' }]
}, {
  minimize: false,
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

threadSchema.set('toObject', { getters: true })


const Thread = mongoose.model('thread', threadSchema)


// find point of parent/child???
      // come back when d3 worked out


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
