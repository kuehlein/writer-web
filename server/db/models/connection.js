'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { Thread } = require('./')


const connectionSchema = new Schema({
  parent: {
    type: Schema.ObjectId,
    connectedOn: String,
    required: true
  },
  child: {
    type: Schema.ObjectId,
    connectedOn: String,
    required: true
  }
}, {
  minimize: false,
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

connectionSchema.set('toObject', { getters: true })


const Connection = mongoose.model('Connection', connectSchema)


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
