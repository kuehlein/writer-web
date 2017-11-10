'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema


const connectionSchema = new Schema({
  parent: {                           // validate (required)
    type: Schema.ObjectId,
    connectedOn: Number
  },
  child: {                            // validate (required)
    type: Schema.ObjectId,
    connectedOn: Number
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


// virtual
connectSchema.virtual('Connectionion').get(() =>
  [this.parent.connectedOn, this.child.connectedOn])


module.exports = Connection
