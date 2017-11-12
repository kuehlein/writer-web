'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { Thread } = require('./')


const connectionSchema = new Schema({
  parent: {
    _id: { type: Schema.ObjectId, ref: 'thread' },
    connectedOn: { type: String, required: true },
  },
  child: {
    _id: { type: Schema.ObjectId, ref: 'thread' },
    connectedOn: { type: String, required: true }
  }
}, {
  minimize: false,
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

connectionSchema.set('toObject', { getters: true })


const Connection = mongoose.model('connection', connectionSchema)


// find coordinate OR data for relative, store as a virtual
connectionSchema.methods.findRelative = (id, relationship, point) =>
  point
    ? Thread.findById(id, 'point', (err, doc) => {
        if (err) console.log('There was an error retreving the point', err)
        else return connectionSchema.virtual(`${relationship}Point`).get(() => point)
      })
    : Thread.findById(id, (err, doc) => {
      if (err) console.log('There was an error retreving the data', err)
      else return connectionSchema.virtual(`${relationship}Data`).get(() => data)
    })


module.exports = Connection
