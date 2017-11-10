'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema


const webSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  children: [{ type: Schema.ObjectId, ref: 'child' }]
}, {
  minimize: false,
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

webSchema.set('toObject', { getters: true })


const Web = mongoose.model('Web', webSchema)


module.exports = Web
